import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-display",
        "text-section",
        "text-card",
        "text-lead",
        "text-body",
        "text-micro",
        "text-meta",
      ],
      "text-color": [
        "text-bone",
        "text-ink",
        "text-paper",
        "text-mute",
        "text-stone",
      ],
      "bg-color": [
        "bg-bone",
        "bg-ink",
        "bg-paper",
        "bg-mute",
        "bg-stone",
      ],
      "border-color": [
        "border-bone",
        "border-ink",
        "border-paper",
        "border-mute",
        "border-stone",
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}
