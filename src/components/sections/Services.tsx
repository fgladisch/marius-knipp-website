import { services } from "../../data/services";
import { useFadeIn } from "../../hooks/useFadeIn";
import { SectionHeader } from "../ui/SectionHeader";
import { SectionTitle } from "../ui/SectionTitle";
import { ServiceCard } from "../ui/ServiceCard";

export const Services = () => {
  const { ref, isVisible } = useFadeIn<HTMLDivElement>();

  return (
    <section id="work" className="py-30 bg-primary text-light">
      <div
        ref={ref}
        className={`container fade-in-up ${isVisible ? "visible" : ""}`}
      >
        <SectionHeader label="WORK" />
        <SectionTitle className="mb-40 md:text-right">Services</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-20">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
