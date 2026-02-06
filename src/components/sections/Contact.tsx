import { Button } from "../ui/Button";
import { SectionHeader } from "../ui/SectionHeader";
import { StarDecoration } from "../ui/StarDecoration";

export const Contact = () => {
  return (
    <section id="contact" className="py-30 bg-primary text-light relative">
      <div className="hidden xl:block absolute top-[-54px] right-1/2">
        <StarDecoration variant={3} size={100} />
      </div>

      <div className="container relative text-right">
        <SectionHeader label="Contact" />

        <h2 className="uppercase text-hero-xs xs:text-hero-mobile xl:text-hero-tablet 2xl:text-hero font-extralight leading-[0.9] mb-10">
          Sounds
          <br />
          interesting?
        </h2>

        <p className="text-body mb-12">
          Fragen zu mir? Fragen zu deinem oder Ihrem Projekt?
          <br />
          Kontaktieren Sie mich gerne. Ich freue mich!
        </p>

        <Button
          text="info@mariusknipp.de"
          href="mailto:info@mariusknipp.de"
          variant="secondary"
        />
      </div>
    </section>
  );
};
