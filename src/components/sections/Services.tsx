import { SectionTitle } from '../ui/SectionTitle';
import { ServiceCard } from '../ui/ServiceCard';
import { services } from '../../data/services';

export const Services = () => {
  return (
    <section id="services" className="py-30 bg-primary text-light">
      <div className="container">
        <SectionTitle label="WORK" title="Services" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-20">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
