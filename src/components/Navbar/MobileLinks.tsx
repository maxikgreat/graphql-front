import { AuthorizationButtons } from "@components/Navbar/AuthorizationButtons";
import { Link, LinkProps } from "@components/Navbar/Link";

interface MobileLinksProps {
  links: LinkProps[];
  isVisible: boolean;
}

export const MobileLinks = ({ links, isVisible }: MobileLinksProps) =>
  isVisible ? (
    <div className="block md:hidden fixed top-[80px] left-0 right-0 bg-blue-200">
      <ul>
        {links.map((link) => (
          <Link key={link.anchor} {...link} />
        ))}
      </ul>
      <AuthorizationButtons className="flex p-4 justify-end" />
    </div>
  ) : null;
