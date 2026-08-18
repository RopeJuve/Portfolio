import ServiceCard from "./ServiceCard/ServiceCard";
import { ServicesProps } from "@/types";

const Services = ({ title, positioningStatement, services }: ServicesProps) => (
  <div id="services" className="mt-section px-6 md:px-10 xl:px-0">
    <div className="max-w-container mx-auto flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h3>{title}</h3>
        <p className="max-w-2xl mx-auto">{positioningStatement}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </div>
  </div>
);

export default Services;
