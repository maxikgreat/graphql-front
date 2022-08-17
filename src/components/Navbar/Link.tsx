export interface LinkProps {
  anchor: string;
  title: string;
}

export const Link = ({ anchor, title }: LinkProps) => (
  <li className="p-3 border-b border-b-white md:p-0 md:border-none first-of-type:border-t first-of-type:border-t-white text-right">
    <a
      href={anchor}
      className="outline-none hover:text-blue-900 active:text-blue-900"
    >
      {title}
    </a>
  </li>
);
