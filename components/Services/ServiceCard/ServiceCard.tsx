import Pill from "@/components/ui/pill";
import { Service } from "@/types";

const ServiceCard = ({ service }: { service: Service }) => (
  <div className="flex flex-col gap-4 border border-border rounded-flat bg-linen p-6 md:p-8">
    <div className="flex items-start justify-between gap-4">
      <h5 className="text-left">{service.title}</h5>
      {service.tier === "advanced" && (
        <Pill className="shrink-0 border border-primary">Advanced</Pill>
      )}
    </div>
    <p className="text-left">{service.description}</p>
    <ul className="flex flex-wrap gap-2">
      {service.capabilities.map((capability) => (
        <li key={capability}>
          <Pill className="bg-frame">{capability}</Pill>
        </li>
      ))}
    </ul>
  </div>
);

export default ServiceCard;
