import { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  id?: string;
};

const Container = ({
  children,
  className,
  as: Tag = "div",
  id,
}: ContainerProps) => (
  <Tag id={id} className={cn("mx-auto max-w-[90rem] px-[1.8125rem]", className)}>
    {children}
  </Tag>
);

export default Container;
