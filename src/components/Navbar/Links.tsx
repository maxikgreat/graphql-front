import { Link, LinkProps } from './Link';

interface LinksProps {
  links: LinkProps[];
}

export const Links = ({ links }: LinksProps) => (
  <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-10">
    {links.map((link) => (
      <Link key={link.to} {...link} />
    ))}
  </ul>
);
