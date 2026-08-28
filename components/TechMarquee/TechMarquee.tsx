import SimpleIcon from "@/components/SimpleIcon/SimpleIcon";
import { TechMarqueeProps } from "@/types";

const iconClass =
  "transition-all text-primary w-20 h-20 hover:scale-110 hover:text-accent";

const TechMarquee = ({ title, techStack }: TechMarqueeProps) => (
  <div id="stack" className="mt-section w-full mx-auto" role="group" aria-label={title}>
    <div className="w-[90%] mx-auto px-6 md:px-10 xl:px-0 border-b border-border">
      <h3 className="mb-6 text-left w-full">{title}</h3>
    </div>
    <div className="py-14 bg-bg overflow-hidden">
    <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
      {[0, 1].map((copy) => (
        // Each copy is self-contained (items + internal gaps + one trailing
        // spacer of the same width), so its rendered width is exactly one
        // repeat period. That's what makes the keyframes' -50% shift land
        // pixel-exact on the next copy — no approximation, no loop skip.
        <div key={copy} className="flex shrink-0 gap-12 pr-12" aria-hidden={copy === 1}>
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex shrink-0 flex-col items-center gap-2"
            >
              <SimpleIcon path={tech.iconPath} className={iconClass} />
              <span className="font-body text-caption text-carbon uppercase">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      ))}
      </div>
    </div>
  </div>
);

export default TechMarquee;
