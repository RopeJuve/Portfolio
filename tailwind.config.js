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
        bg: "#f4f1de",
        frame: "#D8D4C0",
        content: "#333333",
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
        header: ["var(--font-header)"],
        body: ["var(--font-text)"],
      },
      maxWidth: {
        container: "77.5rem",
      },
      fontSize: {
        fs1: "clamp(2.25rem, 5vw, 3.5rem)",
        fs2: "clamp(1rem, 3vw, 2.25rem)",
        fs3: "clamp(1rem, 3vw, 1.25rem)",
        fs4: "clamp(1.5rem, 4vw, 2.5rem)",
        fs5: "clamp(1.25rem, 3vw, 2.25rem)",
      },
      backgroundImage: {
        texture: "url('/images/backgroundIMG.png')",
      },
      spacing: {
        section: "clamp(3rem, 6vw, 4rem)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
