import heroBg from "../../assets/images/hero-bg.png";
import { StarDecoration } from "../ui/StarDecoration";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-[800px] md:h-[982px] flex items-center text-light overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover animate-slow-zoom"
        />
      </div>

      <div className="container relative">
        <h1
          className="text-hero-mobile md:text-hero-tablet lg:text-hero font-extralight uppercase"
          style={{ lineHeight: "0.9" }}
        >
          Creating.
          <br />
          Spaces.
        </h1>

        <ul className="xl:absolute xl:right-[60px] xl:top-[-70px] list-none xl:text-right text-services-list-mobile md:text-services-list-tablet lg:text-services-list uppercase mt-20 xl:mt-0">
          <li className="mb-2">Raumgestaltung</li>
          <li className="mb-2">Messebau</li>
          <li className="mb-2">Retaildesign</li>
          <li className="mb-2">Grafikdesign</li>
          <li className="mb-2">Brand</li>
        </ul>

        <div className="mt-20 w-full flex flex-wrap justify-end gap-6 md:gap-8 xl:absolute xl:right-[60px] xl:bottom-[-200px] xl:justify-start xl:gap-12 xl:mt-0 xl:w-auto">
          <StarDecoration className="w-10 md:w-16 xl:w-[100px]" variant={1} />
          <StarDecoration className="w-10 md:w-16 xl:w-[100px]" variant={2} />
          <StarDecoration className="w-10 md:w-16 xl:w-[100px]" variant={3} />
          <StarDecoration className="w-10 md:w-16 xl:w-[100px]" variant={4} />
        </div>
      </div>
    </section>
  );
};
