import profileImg from '../../assets/images/profile.png';
import { SectionTitle } from '../ui/SectionTitle';

export const About = () => {
  return (
    <section id="about" className="py-30 bg-primary text-light">
      <div className="container">
        <SectionTitle label="About" />

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] xl:grid-cols-[408px_1fr] gap-20 items-start">
          <div className="w-full max-w-[300px] md:max-w-none md:w-[300px] xl:w-[408px] aspect-square overflow-hidden">
            <img src={profileImg} alt="Marius Knipp" loading="lazy" className="w-full h-full object-cover" />
          </div>

          <p className="max-w-text text-body leading-[1.65]">
            Hi! Mein name ist Marius Knipp, ich bin selbstständiger
            Produkt- und Industriedesigner, gelernter Schreiner und
            gestalte Raum-, Messebau und Retailstore Konzepte. In enger
            Zusammenarbeit mit Partnern aus dem Handwerk stelle ich sicher,
            dass ihr Projekt in die schnelle Umsetzung übergeht und
            begleite den Prozess.
          </p>
        </div>
      </div>
    </section>
  );
};
