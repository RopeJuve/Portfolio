import { cn } from "@/lib/utils";

const Wordmark = ({ className }: { className?: string }) => (
  <span className={cn("font-header uppercase tracking-tight", className)}>
    Shterjov<sup className="text-[0.35em] align-super">&#174;</sup>
  </span>
);

export default Wordmark;
