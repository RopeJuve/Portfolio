import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const Pill = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={cn(
      "rounded-pill px-3 py-1 font-body text-caption text-primary uppercase",
      className
    )}
    {...props}
  />
);

export default Pill;
