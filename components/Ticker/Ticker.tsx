"use client";

import { useRef } from "react";
import { useTicker } from "./useTicker";

const COPIES = 4;

const Ticker = ({ words }: { words: string[] }) => {
  const bandRef = useRef<HTMLDivElement>(null);
  useTicker(bandRef);

  const run = (
    <p className="flex shrink-0 items-center whitespace-nowrap px-[1.8125rem] text-[2.75rem] font-light uppercase leading-none text-paper">
      {words.map((word) => (
        <span key={word}>
          {word.toUpperCase()}
          <span className="text-mute">{` \u2014 `}</span>
        </span>
      ))}
    </p>
  );

  return (
    <div
      ref={bandRef}
      className="h-[4.75rem] w-full overflow-hidden bg-ink mt-[7.1875rem] flex items-center justify-center"
      aria-hidden="true"
    >
      <div data-ticker-track className="flex w-max will-change-transform">
        {Array.from({ length: COPIES }, (_, index) => (
          <div key={index}>{run}</div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
