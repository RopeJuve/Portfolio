"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import { useRollOver } from "./useRollOver";

const RollOver = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  const rootRef = useRef<HTMLSpanElement>(null);
  useRollOver(rootRef);

  return (
    <span
      ref={rootRef}
      className={cn(
        "inline-block h-[1.25em] overflow-hidden leading-[1.25em]",
        className
      )}
    >
      <span data-rollover-inner className="flex flex-col">
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </span>
    </span>
  );
};

export default RollOver;
