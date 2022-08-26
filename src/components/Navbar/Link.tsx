import { NavLink } from 'react-router-dom';

export interface LinkProps {
  to: string;
  title: string;
}

export const Link = ({ to, title }: LinkProps) => (
  <li className="cursor-pointer font-normal text-white hover:text-secondary">
    <NavLink to={to}>{title}</NavLink>
  </li>
);
