"use client";

import { SocialLink } from "@/types";
import RollOver from "../RollOver/RollOver";

const Social = ({ links }: { links: SocialLink[] }) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          tabIndex={0}
          className="rounded-full border border-ink px-3.5 py-1 text-micro uppercase text-ink hover:bg-ink hover:text-paper"
        >
          <RollOver>{link.label}</RollOver>
        </a>
      ))}
    </div>
  );
};

export default Social;
