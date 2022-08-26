export const links = [
  {
    title: 'Useful Links',
    links: [
      {
        name: 'Content',
        link: 'https://www.hoobank.com/content/',
      },
      {
        name: 'How it Works',
        link: 'https://www.hoobank.com/how-it-works/',
      },
      {
        name: 'Create',
        link: 'https://www.hoobank.com/create/',
      },
      {
        name: 'Explore',
        link: 'https://www.hoobank.com/explore/',
      },
      {
        name: 'Terms & Services',
        link: 'https://www.hoobank.com/terms-and-services/',
      },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        name: 'Help Center',
        link: 'https://www.hoobank.com/help-center/',
      },
      {
        name: 'Partners',
        link: 'https://www.hoobank.com/partners/',
      },
      {
        name: 'Suggestions',
        link: 'https://www.hoobank.com/suggestions/',
      },
      {
        name: 'Blog',
        link: 'https://www.hoobank.com/blog/',
      },
      {
        name: 'Newsletters',
        link: 'https://www.hoobank.com/newsletters/',
      },
    ],
  },
  {
    title: 'Partner',
    links: [
      {
        name: 'Our Partner',
        link: 'https://www.hoobank.com/our-partner/',
      },
      {
        name: 'Become a Partner',
        link: 'https://www.hoobank.com/become-a-partner/',
      },
    ],
  },
];

export const Links = () => (
  <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
    {links.map((footerLink) => (
      <div
        key={footerLink.title}
        className="flex flex-col ss:my-0 my-4 min-w-[150px]"
      >
        <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
          {footerLink.title}
        </h4>
        <ul className="list-none mt-4">
          {footerLink.links.map((link) => (
            <li
              key={link.name}
              className="font-normal text-[16px] leading-[24px] text-dim-white hover:text-secondary cursor-pointer mb-3 last-of-type:mb-0"
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
