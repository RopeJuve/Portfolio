/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: "#f0f0f0",
        ink: "#2a2a2a",
        paper: "#fafafa",
        mute: "#8f8f88",
        stone: "#e6e4e0",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "Helvetica Neue", "Arial", "sans-serif"],
        serif: ["var(--font-source-serif)", "Georgia", "serif"],
      },
      fontSize: {
        display: [
          "clamp(3.5rem,7vw,6.3125rem)",
          { lineHeight: "0.8", letterSpacing: "-0.06em" },
        ],
        section: [
          "clamp(2.5rem,5vw,4.375rem)",
          { lineHeight: "0.88", letterSpacing: "-0.03em" },
        ],
        card:     ["1.375rem",                  { lineHeight: "1.17", letterSpacing: "-0.02em"  }],
        question: ["clamp(1.125rem,2vw,1.5rem)", { lineHeight: "1.1",  letterSpacing: "-0.024em" }],
        lead:     ["1.0625rem",                  { lineHeight: "1.2",  letterSpacing: "-0.018em" }],
        "lead-sm":["1rem",                       { lineHeight: "1.35", letterSpacing: "-0.012em" }],
        body:     ["0.875rem",                   { lineHeight: "1.2",  letterSpacing: "-0.018em" }],
        micro: ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.06em" }],
        meta: ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.08em" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 0.125rem)",
        sm: "calc(var(--radius) - 0.25rem)",
      },
      transitionDuration: {
        DEFAULT: "150ms",
      },
      transitionTimingFunction: {
        DEFAULT: "ease",
      },
    },
  },
  plugins: [],
};
