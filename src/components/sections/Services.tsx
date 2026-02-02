import './Services.css';
import { SectionTitle } from '../ui/SectionTitle';
import { ServiceCard } from '../ui/ServiceCard';
import { services } from '../../data/services';

export const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services__container container">
        <SectionTitle label="WORK" title="Services" />

        <div className="services__grid">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
