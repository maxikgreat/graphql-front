import { Switch } from '@/components/Switch';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';

interface ModeSwitcherProps {
  className: string;
}

enum Mode {
  Dark = 'dark',
  Light = 'light',
}

const modeKey = 'mode';

const getInitialMode = () =>
  localStorage.getItem(modeKey) === Mode.Dark ||
  window.matchMedia(`(prefers-color-scheme: ${Mode.Dark})`).matches;

export const ModeSwitcher = ({ className }: ModeSwitcherProps) => {
  const [darkMode, setDarkMode] = useState(getInitialMode());
  const toggleDarkMode = () => setDarkMode((prevState) => !prevState);

  useEffect(() => {
    const documentClassList = document.documentElement.classList;

    if (darkMode) {
      documentClassList.add('dark');
      localStorage.setItem(modeKey, Mode.Dark);
    } else {
      documentClassList.remove('dark');
      localStorage.removeItem(modeKey);
    }
  }, [darkMode]);

  return (
    <Switch
      className={className}
      checked={darkMode}
      onChange={toggleDarkMode}
      icons={{
        on: MoonIcon,
        off: SunIcon,
      }}
    />
  );
};
