import './About.css';
import profileImg from '../../assets/images/profile.png';
import { SectionTitle } from '../ui/SectionTitle';

export const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__container container">
        <SectionTitle label="About" />

        <div className="about__content">
          <div className="about__image">
            <img src={profileImg} alt="Marius Knipp" loading="lazy" />
          </div>

          <p className="about__text">
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
