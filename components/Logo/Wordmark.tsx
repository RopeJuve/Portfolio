import { cn } from "@/lib/utils";

const Wordmark = ({ className }: { className?: string }) => (
  <span
    className={cn(
      "font-sans font-normal uppercase tracking-[-0.023em] text-ink",
      className
    )}
  >
    SHTERJOV
    <sup className="align-super text-[0.5625rem] leading-none md:text-[0.875rem]">
      &#174;
    </sup>
  </span>
);

export default Wordmark;
