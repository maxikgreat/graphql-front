import { Button } from '@/components';

export const CTA = () => (
  <section className="section padding flex-center sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow mb-20">
    <div className="flex-1 flex flex-col">
      <h2 className="heading2">Let’s try our service now!</h2>
      <p className="paragraph max-w-[470px] mt-5">
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className="flex-center sm:ml-10 ml-0 sm:mt-0 mt-10">
      <Button className="px-6 py-4 text-[18px]">Get started</Button>
    </div>
  </section>
);
