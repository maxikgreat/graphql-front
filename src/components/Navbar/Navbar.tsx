import { AuthorizationButtons } from './AuthorizationButtons';
import { Links } from './Links';
import { MobileLinks } from './MobileLinks';
import { Close, Logo, Menu } from '@assets/images';
import { LinkProps } from '@components/Navbar/Link';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { AppRoute } from '@pages/AppRoutes';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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

  const iconClassName = 'w-[28px] text-white';

  return (
    <header className="padding-x flex-center">
      <nav className="w-full flex py-6 justify-between items-center navbar">
        <Link to={AppRoute.Home} className="cursor-pointer">
          <img src={Logo} alt="hoobank" className="w-[124px] h-[32px]" />
        </Link>

        <Links links={links} />

        <div className="sm:hidden flex flex-1 justify-end items-center">
          {isMobileMenuOpened ? (
            <XIcon onClick={closeMenu} className={iconClassName} />
          ) : (
            <MenuIcon onClick={openMenu} className={iconClassName} />
          )}
        </div>

        {isMobileMenuOpened && <MobileLinks links={links} />}
      </nav>
    </header>
  );
};
