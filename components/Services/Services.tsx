import ServiceCard from "./ServiceCard/ServiceCard";
import { ServicesProps } from "@/types";

const Services = ({ title, services }: ServicesProps) => (
  <div id="services" className="mt-section px-6 md:px-10 xl:px-0">
    <div className="w-[90%] mx-auto flex flex-col gap-14 mt-section">
      <div className="flex flex-col border-b border-border pb-4 md:flex-row md:items-center md:justify-between gap-4">
        <h3 className="text-left ">{title}</h3>
      </div>
      <div className="border border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Services;
