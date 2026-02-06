import heroBg from "../../assets/images/hero-bg.png";
import { StarDecoration } from "../ui/StarDecoration";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-[982px] flex items-center text-light overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container relative">
        <h1 className="text-hero-mobile md:text-hero-tablet lg:text-hero font-extralight uppercase">
          Creating.
          <br />
          Spaces.
        </h1>

        <ul className="xl:absolute xl:right-[60px] xl:top-[-20px] list-none xl:text-right text-services-list uppercase mt-20 xl:mt-0">
          <li className="mb-2">Raumgestaltung</li>
          <li className="mb-2">Messebau</li>
          <li className="mb-2">Retaildesign</li>
          <li className="mb-2">Grafikdesign</li>
          <li className="mb-2">Brand</li>
        </ul>
      </div>

      <div className="hidden absolute right-20 bottom-0 md:flex flex-wrap gap-6 md:gap-12 mt-20">
        <StarDecoration variant={1} />
        <StarDecoration variant={2} />
        <StarDecoration variant={3} />
        <StarDecoration variant={4} />
      </div>
    </section>
  );
};
