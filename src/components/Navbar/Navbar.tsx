import { AuthorizationButtons } from './AuthorizationButtons';
import { Links } from './Links';
import { MobileLinks } from './MobileLinks';
import { LinkProps } from '@components/Navbar/Link';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useState } from 'react';

const links: LinkProps[] = [
  {
    to: '/',
    title: 'Home',
  },
  {
    to: '#about',
    title: 'About',
  },
  {
    to: '#support',
    title: 'Support',
  },
  {
    to: '#platforms',
    title: 'Platforms',
  },
  {
    to: '#pricing',
    title: 'Pricing',
  },
];

export const Navbar = () => {
  const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);

  const openMenu = () => setMobileMenuOpened(true);
  const closeMenu = () => setMobileMenuOpened(false);

  const mobileIconClassName = 'md:hidden w-10 cursor-pointer text-blue-900';

  return (
    <header>
      <nav className="w-screen h-[80px] bg-blue-200 fixed drop-shadow-md flex items-center justify-between px-4">
        <div className="flex gap-7 items-center">
          <h2 className="uppercase font-bold text-2xl sm:text-3xl text-blue-900">
            Brand
          </h2>
          <Links links={links} />
          <MobileLinks isVisible={isMobileMenuOpened} links={links} />
        </div>
        <AuthorizationButtons className="hidden md:flex" />
        {isMobileMenuOpened ? (
          <XIcon onClick={closeMenu} className={mobileIconClassName} />
        ) : (
          <MenuIcon onClick={openMenu} className={mobileIconClassName} />
        )}
      </nav>
    </header>
  );
};
