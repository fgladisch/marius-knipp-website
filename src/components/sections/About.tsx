import profileImg from "../../assets/images/profile.png";
import { SectionHeader } from "../ui/SectionHeader";

export const About = () => {
  return (
    <section id="about" className="py-30 bg-primary text-light">
      <div className="container">
        <SectionHeader label="About" />

        <p className="xl:pl-[408px] md:pl-[300px] md:mb-2 mb-4 text-body leading-[1.65]">
          Hi! Mein name ist Marius Knipp, ich bin selbstständiger Produkt- und
          Industriedesigner, gelernter Schreiner und gestalte Raum-, Messebau
          und Retailstore Konzepte. In enger Zusammenarbeit mit Partnern aus dem
          Handwerk stelle ich sicher, dass ihr Projekt in die schnelle Umsetzung
          übergeht und begleite den Prozess.
        </p>
        <div className="w-full max-w-[300px] md:max-w-none md:w-[300px] xl:w-[408px] aspect-square overflow-hidden">
          <img
            src={profileImg}
            alt="Marius Knipp"
            loading="lazy"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>
    </section>
  );
};
