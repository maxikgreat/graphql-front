import { Feature, FeatureProps } from './Feature';
import { Send, Shield, Star } from '@/assets/images';
import { Button } from '@/components';

interface FeatureType extends FeatureProps {
  id: string;
}

export const features: FeatureType[] = [
  {
    id: 'feature-1',
    icon: Star,
    title: 'Rewards',
    content:
      'The best credit cards offer some tantalizing combinations of promotions and prizes',
  },
  {
    id: 'feature-2',
    icon: Shield,
    title: '100% Secured',
    content:
      'We take proactive steps make sure your information and transactions are secure.',
  },
  {
    id: 'feature-3',
    icon: Send,
    title: 'Balance Transfer',
    content:
      'A balance transfer credit card can save you a lot of money in interest charges.',
  },
];

export const Features = () => (
  <section id="features" className="section">
    <div className="section-info gap-5">
      <h2 className="heading2">
        You do the business, <br className="sm:block hidden" /> we&apos;ll
        handle the money.
      </h2>
      <p className="paragraph max-w-[470px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
        dignissimos dolore enim hic nihil numquam quidem quos sequi sit
        voluptatum?
      </p>
      <Button className="px-6 py-4 text-[18px] mt-5">Get started</Button>
    </div>
    <div className="section-img flex-col">
      {features.map(({ id, ...rest }) => (
        <Feature key={id} {...rest} />
      ))}
    </div>
  </section>
);
