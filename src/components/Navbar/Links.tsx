import { Link, LinkProps } from './Link';

interface LinksProps {
  links: LinkProps[];
}

export const Links = ({ links }: LinksProps) => (
  <ul className="hidden md:flex gap-5 text-xl md:text-base bg-blue-200">
    {links.map((link) => (
      <Link key={link.to} {...link} />
    ))}
  </ul>
);
