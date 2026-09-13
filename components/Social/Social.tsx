"use client";

import { record } from "@/lib/count";
import { SocialLink } from "@/types";
import RollOver from "../RollOver/RollOver";

const Social = ({ links }: { links: SocialLink[] }) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {links.map((link) => {
        const handleSocialClick = () => {
          record("social_pill", { label: link.label });
        };

        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            tabIndex={0}
            onClick={handleSocialClick}
            className="rounded-full border border-ink px-3.5 py-1 text-micro uppercase text-ink hover:bg-ink hover:text-paper"
          >
            <RollOver>{link.label}</RollOver>
          </a>
        );
      })}
    </div>
  );
};

export default Social;
