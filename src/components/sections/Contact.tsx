import arrowIcon from '../../assets/icons/arrow.svg';
import { SectionTitle } from '../ui/SectionTitle';
import { StarDecoration } from '../ui/StarDecoration';
import { Button } from '../ui/Button';

export const Contact = () => {
  return (
    <section id="contact" className="py-30 bg-primary text-light relative">
      <div className="container relative">
        <div className="static md:absolute left-0 top-0 mb-12 md:mb-0">
          <StarDecoration variant={1} size={177} />
        </div>

        <img
          src={arrowIcon}
          alt=""
          className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 w-[100px] xl:w-[167px] h-auto"
        />

        <SectionTitle label="Contact" />

        <h2 className="text-hero-xs xs:text-hero-mobile xl:text-hero-tablet 2xl:text-hero font-extralight leading-[0.9] mb-20">
          Sounds<br />interesting?
        </h2>

        <p className="max-w-text text-body mb-12">
          Fragen zu mir? Fragen zu deinem oder Ihrem Projekt?
          Kontaktieren Sie mich gerne. Ich freue mich!
        </p>

        <Button text="kontakt@mariusk.de" href="mailto:kontakt@mariusk.de" variant="secondary" />
      </div>
    </section>
  );
};
