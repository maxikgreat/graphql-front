import HeroImage from "@assets/images/hero-image.png";
import { Button } from "@components/Button";

export const Hero = () => (
  <section className="container mx-auto items-center h-screen pt-[100px] md:pt-[80px] grid md:grid-cols-2 p-4 md:p-0">
    <div className="flex flex-col items-center text-center md:items-end md:text-end gap-4">
      <h3 className="text-2xl">Unique sequencing and production</h3>
      <p className="text-5xl lg:text-7xl font-bold text-blue-900">
        Cloud Management
      </p>
      <p className="text-pink-900 text-lg">This is our tech branch</p>
      <Button className="text-2xl px-6 py-3">Try for free</Button>
    </div>
    <div className="w-1/2 sm:w-3/4 md:w-full min-w-[300px] mx-auto">
      <img src={HeroImage} alt="hero image" />
    </div>
  </section>
);
