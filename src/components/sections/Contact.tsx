import './Contact.css';
import arrowIcon from '../../assets/icons/arrow.svg';
import { SectionTitle } from '../ui/SectionTitle';
import { StarDecoration } from '../ui/StarDecoration';
import { Button } from '../ui/Button';

export const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__container container">
        <div className="contact__decoration">
          <StarDecoration variant={1} size={177} />
        </div>

        <img src={arrowIcon} alt="" className="contact__arrow" />

        <SectionTitle label="Contact" />

        <h2 className="contact__headline">
          Sounds<br />interesting?
        </h2>

        <p className="contact__text">
          Fragen zu mir? Fragen zu deinem oder Ihrem Projekt?
          Kontaktieren Sie mich gerne. Ich freue mich!
        </p>

        <Button text="kontakt@mariusk.de" href="mailto:kontakt@mariusk.de" variant="secondary" />
      </div>
    </section>
  );
};
