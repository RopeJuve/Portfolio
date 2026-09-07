"use client";

import { useRef } from "react";
import Wordmark from "@/components/Logo/Wordmark";
import { LoaderProps } from "@/types";
import { useLoader } from "./useLoader";

const Loader = ({ footerRole, contactLocale }: LoaderProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const { gone } = useLoader(overlayRef);

  if (gone) return null;

  return (
    <div
      ref={overlayRef}
      className="loader-overlay fixed inset-0 z-[60] flex flex-col bg-bone motion-reduce:hidden max-w-[90rem] mx-auto"
      aria-hidden="true"
    >
      <div
        data-loader-meta-row
        className="flex items-baseline justify-between border-b border-ink px-[1.8125rem] py-5 w-full"
      >
        <p data-loader-meta className="text-meta uppercase text-ink">
          {footerRole}
        </p>
        <p data-loader-meta className="text-meta uppercase text-mute">
          {contactLocale}
        </p>
      </div>
      <div className="flex min-h-0 w-full flex-1 flex-col justify-center px-[1.8125rem] pb-6">
        <div className="flex items-end justify-between gap-[1.8125rem]">
          <div className="overflow-hidden pb-[0.14em]">
            <div data-loader-wordmark>
              <Wordmark className="text-display font-light" />
            </div>
          </div>
          <div className="overflow-hidden pb-[0.14em]">
            <span
              data-loader-counter
              className="block text-display font-light tabular-nums text-ink"
            >
              000
            </span>
          </div>
        </div>
        <div data-loader-track className="relative mt-6 h-px w-full bg-stone">
          <div
            data-loader-bar
            className="absolute inset-y-0 left-0 w-full origin-left bg-ink"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
