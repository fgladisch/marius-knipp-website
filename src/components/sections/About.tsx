import profileImg from "../../assets/images/profile.png";
import { useFadeIn } from "../../hooks/useFadeIn";
import { SectionHeader } from "../ui/SectionHeader";

export const About = () => {
  const { ref, isVisible } = useFadeIn<HTMLDivElement>();

  return (
    <section id="about" className="py-30 bg-primary text-light">
      <div
        ref={ref}
        className={`container fade-in-up ${isVisible ? "visible" : ""}`}
      >
        <SectionHeader label="About" />

        <div className="md:px-30">
          <p className="xl:pl-[408px] md:pl-[300px] md:m-4 mb-4 text-body leading-[1.65]">
            Hi, ich bin Marius Knipp, selbstständiger Produkt- und
            Industriedesigner sowie gelernter Schreiner. Ich gestalte Raum-,
            Messebau- und Retailstore Konzepte. In enger Zusammenarbeit mit
            Partner:innen aus dem Handwerk bringe ich Projekte schnell in die
            Umsetzung und begleite Sie von der Idee bis zur Realisierung.
          </p>
          <div className="group w-full max-w-[300px] md:max-w-none md:w-[300px] xl:w-[408px] aspect-square md:hover:scale-105 transition-transform duration-700 ease-out">
            <img
              src={profileImg}
              alt="Marius Knipp"
              loading="lazy"
              className="w-full h-full md:grayscale md:group-hover:grayscale-0 transition-[filter] duration-700 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
