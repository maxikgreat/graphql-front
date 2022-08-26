import style from './Sidebar.module.css';
import { Link, LinkProps } from '@/components/Navbar/Link';

interface SidebarProps {
  links: LinkProps[];
}

export const Sidebar = ({ links }: SidebarProps) => (
  <div
    className={`flex p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl ${style.sidebar}`}
  >
    <ul className="list-none flex flex-col justify-end items-center flex-1 gap-5">
      {links.map((link) => (
        <Link key={link.to} {...link} />
      ))}
    </ul>
  </div>
);
