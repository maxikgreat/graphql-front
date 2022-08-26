import { Features, Hero, Stats } from './components';
import { Container } from '@/components';

export const Home = () => (
  <>
    <Container>
      <Hero />
    </Container>
    <Container className="padding-x">
      <Stats />
      <Features />
      {/* Business Billing CardDeal Testimonials Clients CTA Footer */}
    </Container>
  </>
);
