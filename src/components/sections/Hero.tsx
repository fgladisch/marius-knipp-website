import heroBg from '../../assets/images/hero-bg.png';
import { StarDecoration } from '../ui/StarDecoration';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center text-light overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container relative">
        <h1 className="text-hero-xs xs:text-hero-mobile xl:text-hero-tablet 2xl:text-hero font-extralight uppercase">
          Creating.<br />Spaces.
        </h1>

        <div className="flex flex-wrap gap-6 md:gap-12 mt-20">
          <StarDecoration variant={1} />
          <StarDecoration variant={2} />
          <StarDecoration variant={3} />
          <StarDecoration variant={4} />
        </div>

        <ul className="xl:absolute xl:right-0 xl:top-[120px] list-none xl:text-right text-services-list uppercase mt-20 xl:mt-0">
          <li className="mb-2">Raumgestaltung</li>
          <li className="mb-2">Messebau</li>
          <li className="mb-2">Retaildesign</li>
          <li className="mb-2">Grafikdesign</li>
          <li className="mb-2">Brand</li>
        </ul>
      </div>
    </section>
  );
};
