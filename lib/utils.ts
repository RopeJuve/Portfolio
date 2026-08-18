import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// tailwind-merge doesn't know our custom theme tokens (tailwind.config.js) by
// default, so it can't tell e.g. `text-caption` (font size) and `text-bone`
// (color) apart and silently drops one as a false conflict. Registering them
// here keeps `cn()` merges correct for the design-system palette/type-scale.
const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-caption",
        "text-body-sm",
        "text-body-lg",
        "text-subheading",
        "text-heading-sm",
        "text-display",
        "text-display-xl",
      ],
      "text-color": [
        "text-carbon",
        "text-bone",
        "text-ink",
        "text-linen",
        "text-ash",
        "text-parchment",
        "text-stone",
        "text-clay",
        "text-bg",
        "text-frame",
        "text-content",
      ],
      "bg-color": [
        "bg-carbon",
        "bg-bone",
        "bg-ink",
        "bg-linen",
        "bg-ash",
        "bg-parchment",
        "bg-stone",
        "bg-clay",
        "bg-bg",
        "bg-frame",
        "bg-content",
      ],
      "border-color": [
        "border-carbon",
        "border-bone",
        "border-ink",
        "border-linen",
        "border-ash",
        "border-parchment",
        "border-stone",
        "border-clay",
      ],
      rounded: ["rounded-flat", "rounded-pill"],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}
