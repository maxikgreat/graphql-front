import {
  Billing,
  CardDeal,
  CTA,
  Features,
  Hero,
  Stats,
  Testimonials,
} from './components';
import { Container } from '@/components';

export const Home = () => (
  <>
    <Container>
      <Hero />
    </Container>
    <Container className="padding-x">
      <Stats />
      <Features />
      <Billing />
      <CardDeal />
      <Testimonials />
      <CTA />
    </Container>
  </>
);
