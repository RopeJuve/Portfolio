import { Service } from "@/types";
import { cn } from "@/lib/utils";

const ServiceCard = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => (
  <div
    className={cn(
      "flex flex-col gap-4 p-8 bg-bg border-r border-b border-border last:border-r-0 last:border-b-0",
      index === 1 && "md:border-r-0",
      index === 2 && "md:border-b-0",
    )}
  >
    <p className="text-caption text-left text-smoke">
      {String(index + 1).padStart(2, "0")}
    </p>
    <h5 className="text-left text-2xl">{service.title}</h5>
    <p className="text-left">{service.description}</p>
    <p className=" text-caption uppercase tracking-widest text-carbon text-left">
      {service.techChips.join(" · ")}
    </p>
  </div>
);

export default ServiceCard;
