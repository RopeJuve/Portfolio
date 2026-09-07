import { Service } from "@/types";

const ServiceCard = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => (
  <article className="flex flex-col gap-4 border-b border-r border-ink bg-bone px-7 pb-9 pt-8">
    <p className="text-meta uppercase text-mute">
      {String(index + 1).padStart(2, "0")}
    </p>
    <h3 className="text-card font-normal uppercase text-ink">{service.title}</h3>
    <p className="max-w-[52ch] text-body text-ink">{service.description}</p>
    <p className="text-micro uppercase text-ink">
      {service.techChips.join(" · ")}
    </p>
  </article>
);

export default ServiceCard;
