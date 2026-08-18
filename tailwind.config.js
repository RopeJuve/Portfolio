/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        // Reference design-system palette (ADR-0001) — addressable directly
        // by name, in addition to the semantic roles below. Values live in
        // globals.css (:root) as the single source of truth.
        carbon: "var(--color-carbon)",
        bone: "var(--color-bone)",
        ink: "var(--color-ink)",
        linen: "var(--color-linen)",
        ash: "var(--color-ash)",
        parchment: "var(--color-parchment)",
        stone: "var(--color-stone)",
        clay: "var(--color-clay)",
        bg: "var(--color-bone)",
        frame: "var(--color-parchment)",
        content: "var(--color-carbon)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        // Archivo is the sole brand typeface (ADR-0001) — header and body
        // share the same font, differentiated by weight (300 / 400).
        header: ["var(--font-archivo)"],
        body: ["var(--font-archivo)"],
      },
      maxWidth: {
        container: "77.5rem",
      },
      fontSize: {
        caption: ["12px", { lineHeight: "1.17", letterSpacing: "-0.018em" }],
        "body-sm": ["14px", { lineHeight: "1.2", letterSpacing: "-0.018em" }],
        "body-lg": ["17px", { lineHeight: "1.2", letterSpacing: "-0.018em" }],
        subheading: ["22px", { lineHeight: "1.17", letterSpacing: "-0.02em" }],
        "heading-sm": ["40px", { lineHeight: "0.9", letterSpacing: "-0.023em" }],
        display: ["70px", { lineHeight: "0.88", letterSpacing: "-0.03em" }],
        "display-xl": ["101px", { lineHeight: "0.8", letterSpacing: "-0.06em" }],
      },
      backgroundImage: {
        texture: "url('/images/backgroundIMG.png')",
      },
      spacing: {
        section: "clamp(3rem, 6vw, 4rem)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "max(0px, calc(var(--radius) - 2px))",
        sm: "max(0px, calc(var(--radius) - 4px))",
        // Explicit shape-language tokens (ADR-0001): flat cards/images vs.
        // full-pill buttons/tags, addressable independently of --radius.
        flat: "0px",
        pill: "9999px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        // Drives the Tech Marquee: the track renders its content twice and
        // scrolls exactly one copy's width, looping seamlessly.
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
