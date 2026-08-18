import { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";

const Skill = ({ children, title }: { children: ReactNode; title: string }) => (
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

export default Skill;
