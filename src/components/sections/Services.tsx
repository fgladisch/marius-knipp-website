import { services } from "../../data/services";
import { SectionHeader } from "../ui/SectionHeader";
import { SectionTitle } from "../ui/SectionTitle";
import { ServiceCard } from "../ui/ServiceCard";

export const Services = () => {
  return (
    <section id="work" className="py-30 bg-primary text-light">
      <div className="container">
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
