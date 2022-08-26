import { Card } from '@/assets/images';
import { Button } from '@/components';

export const CardDeal = () => (
  <section id="card-deal" className="section">
    <div className="section-info gap-5">
      <h2 className="heading2">
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className="paragraph max-w-[470px]">
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button className="px-6 py-4 text-[18px] mt-5">Get started</Button>
    </div>

    <div className="section-img">
      <img src={Card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);
