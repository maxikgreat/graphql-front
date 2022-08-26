import { Facebook, Instagram, Linkedin, Twitter } from '@/assets/images';

export const socials = [
  {
    id: 'social-media-1',
    icon: Instagram,
    link: 'https://www.instagram.com/',
  },
  {
    id: 'social-media-2',
    icon: Facebook,
    link: 'https://www.facebook.com/',
  },
  {
    id: 'social-media-3',
    icon: Twitter,
    link: 'https://www.twitter.com/',
  },
  {
    id: 'social-media-4',
    icon: Linkedin,
    link: 'https://www.linkedin.com/',
  },
];

export const Socials = () => (
  <div className="flex flex-row md:mt-0 mt-6 gap-6">
    {socials.map((social) => (
      <img
        key={social.id}
        src={social.icon}
        alt={social.id}
        className="w-[21px] h-[21px] object-contain cursor-pointer"
        onClick={() => window.open(social.link)}
      />
    ))}
  </div>
);
