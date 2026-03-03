import { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SkillVariant = "skills" | "madeWith";

const Skill = ({
  children,
  title,
  variant,
}: {
  children: ReactNode;
  title: string;
  variant: SkillVariant;
}) => {
  if (variant === "madeWith") {
    return (
      <Badge
        variant="outline"
        className="flex flex-col items-center justify-center gap-1 border-none bg-transparent p-2"
      >
        {children}
        <span className="font-body font-bold text-[0.775rem] leading-relaxed text-primary text-center tracking-widest uppercase">
          {title}
        </span>
      </Badge>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {children}
      <h4
        className={cn(
          "font-body font-bold text-base leading-relaxed text-primary text-center tracking-widest uppercase"
        )}
      >
        {title}
      </h4>
    </div>
  );
};

export default Skill;
