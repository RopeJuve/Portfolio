import { cn } from "@/lib/utils";

const Monogram = ({ className }: { className?: string }) => (
  <span
    className={cn(
      "inline-flex aspect-square items-end justify-start rounded-none bg-ink px-1 pb-0.5 font-sans font-light uppercase tracking-[-0.06em] text-paper",
      className
    )}
    aria-hidden="true"
  >
    RS
  </span>
);

export default Monogram;
