import { AuthorizationButtons } from './AuthorizationButtons';
import { Links } from './Links';
import { ModeSwitcher } from './ModeSwitcher';
import { Sidebar } from './Sidebar';
import { Logo } from '@/assets/images';
import { Container } from '@/components';
import { LinkProps } from '@/components/Navbar/Link';
import { AppRoute } from '@/pages/AppRoutes';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
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
];

export const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openMenu = () => setSidebarOpen(true);
  const closeMenu = () => setSidebarOpen(false);

  const iconClassName =
    'w-[28px] text-white cursor-pointer hover:text-secondary';

  return (
    <Container className="padding-x">
      <header className="flex-center">
        <nav className="w-full flex py-6 justify-between items-center">
          <Link to={AppRoute.Home} className="cursor-pointer">
            <img src={Logo} alt="hoobank" className="w-[124px] h-[32px]" />
          </Link>

          <Links links={links} />
          <AuthorizationButtons className="mx-5 sm:flex hidden" />
          <ModeSwitcher className="sm:block hidden" />

          <div className="sm:hidden flex flex-1 justify-end items-center gap-8">
            <ModeSwitcher className="sm:hidden block" />
            {isSidebarOpen ? (
              <XIcon onClick={closeMenu} className={iconClassName} />
            ) : (
              <MenuIcon onClick={openMenu} className={iconClassName} />
            )}
          </div>

          {isSidebarOpen && <Sidebar links={links} />}
        </nav>
      </header>
    </Container>
  );
};
