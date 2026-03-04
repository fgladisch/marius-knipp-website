import { useFadeIn } from "../../hooks/useFadeIn";
import { Button } from "../ui/Button";
import { SectionHeader } from "../ui/SectionHeader";
import { SectionTitle } from "../ui/SectionTitle";
import { StarDecorationGradient } from "../ui/StarDecorationGradient";

export const Contact = () => {
  const { ref, isVisible } = useFadeIn<HTMLDivElement>();

  return (
    <section id="contact" className="py-30 bg-primary text-light relative">
      <div className="hidden md:block absolute top-[-75px] right-1/2">
        <StarDecorationGradient
          size={150}
          topColor="#1E1E1E"
          bottomColor="#F5F5F5"
        />
      </div>

      <div
        ref={ref}
        className={`container relative text-left md:text-right fade-in-up ${isVisible ? "visible" : ""}`}
      >
        <SectionHeader label="Contact" />

        <SectionTitle className="mb-10 md:pl-[100px] text-[24px] md:text-hero-mobile xl:text-hero-tablet">
          Sounds interesting?
        </SectionTitle>

        <p className="mb-12 text-base md:text-[25px]">
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
