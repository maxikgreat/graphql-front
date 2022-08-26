import { AuthorizationButtons } from '@components/Navbar/AuthorizationButtons';
import { Link, LinkProps } from '@components/Navbar/Link';

interface MobileLinksProps {
  links: LinkProps[];
}

export const MobileLinks = ({ links }: MobileLinksProps) => (
  <div className="flex p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar">
    <ul className="list-none flex flex-col justify-end items-center flex-1 gap-5">
      {links.map((link) => (
        <Link key={link.to} {...link} />
      ))}
    </ul>
  </div>
);
