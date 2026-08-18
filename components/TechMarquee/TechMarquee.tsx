import SimpleIcon from "@/components/SimpleIcon/SimpleIcon";
import { TechMarqueeProps } from "@/types";

const iconClass =
  "transition-all text-primary w-9 h-9 hover:scale-110 hover:text-accent";

const TechMarquee = ({ title, techStack }: TechMarqueeProps) => {
  const loopedStack = [...techStack, ...techStack];

  return (
    <div
      className="mt-section py-6 bg-frame overflow-hidden"
      role="group"
      aria-label={title}
    >
      <div className="flex w-max gap-12 animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
        {loopedStack.map((tech, index) => (
          <div
            key={`${index}-${tech.name}`}
            className="flex shrink-0 flex-col items-center gap-2"
            aria-hidden={index >= techStack.length}
          >
            <SimpleIcon path={tech.iconPath} className={iconClass} />
            <span className="font-body text-caption text-primary uppercase">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
