import { NavLink } from 'react-router-dom';

export interface LinkProps {
  to: string;
  title: string;
}

export const Link = ({ to, title }: LinkProps) => (
  <li className="p-3 border-b border-b-white md:p-0 md:border-none first-of-type:border-t first-of-type:border-t-white text-right">
    <NavLink
      to={to}
      className="outline-none hover:text-blue-900 active:text-blue-900"
    >
      {title}
    </NavLink>
  </li>
);
