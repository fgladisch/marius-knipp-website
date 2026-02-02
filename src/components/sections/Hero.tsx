import './Hero.css';
import heroBg from '../../assets/images/hero-bg.png';
import { StarDecoration } from '../ui/StarDecoration';

export const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__background">
        <img src={heroBg} alt="" />
      </div>

      <div className="hero__content container">
        <h1 className="hero__headline">
          Creating.<br />Spaces.
        </h1>

        <div className="hero__stars">
          <StarDecoration variant={1} />
          <StarDecoration variant={2} />
          <StarDecoration variant={3} />
          <StarDecoration variant={4} />
        </div>

        <ul className="hero__services">
          <li>Raumgestaltung</li>
          <li>Messebau</li>
          <li>Retaildesign</li>
          <li>Grafikdesign</li>
          <li>Brand</li>
        </ul>
      </div>
    </section>
  );
};
