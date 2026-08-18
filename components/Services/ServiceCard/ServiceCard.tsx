import { cn } from "@/lib/utils";
import { Service } from "@/types";

const pillClass = "rounded-pill px-3 py-1 font-body text-caption text-primary uppercase";

const ServiceCard = ({ service }: { service: Service }) => (
  <div className="flex flex-col gap-4 border border-border rounded-flat bg-linen p-6 md:p-8">
    <div className="flex items-start justify-between gap-4">
      <h5 className="text-left">{service.title}</h5>
      {service.tier === "advanced" && (
        <span className={cn(pillClass, "shrink-0 border border-primary")}>
          Advanced
        </span>
      )}
    </div>
    <p className="text-left">{service.description}</p>
    <ul className="flex flex-wrap gap-2">
      {service.capabilities.map((capability) => (
        <li key={capability} className={cn(pillClass, "bg-frame")}>
          {capability}
        </li>
      ))}
    </ul>
  </div>
);

export default ServiceCard;
