import { Apple, Bill, Google } from '@/assets/images';

export const Billing = () => (
  <section id="billing" className="section-reverse">
    <div className="section-img-reverse">
      <img src={Bill} alt="billing" className="w-full h-full relative z-[5]" />
      <div className="absolute z-[0] w-1/2 h-1/2 -left-1/2 bottom-0 rounded-full pink__gradient gradient-animated" />
    </div>

    <div className="section-info gap-5">
      <h2 className="heading2">
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className="paragraph max-w-[470px]">
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-5 gap-5">
        <img
          src={Apple}
          alt="apple"
          className="w-[128.86px] h-[42.05px] object-contain cursor-pointer"
        />
        <img
          src={Google}
          alt="google play"
          className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);
