import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import Color from "colorjs.io";

import { fontFamily } from "tailwindcss/defaultTheme";

import {
  display1,
  display2,
  display3,
  headline1,
  headline2,
  subhead,
  body1,
  body2,
  small,
  caption,
  callout,
} from "./brand";

import { brandConfig } from "./plugins/brand/tokens";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", ...fontFamily.sans],
        mono: ["var(--font-dm-mono)", ...fontFamily.mono],
        serif: ["var(--font-dm-serif-display)", ...fontFamily.serif],
      },
      colors: {
        border: "var(--color-outline-high)",
        input: "var(--color-basic)",
        ring: "var(--color-outline-high)",
        background: "var(--color-background)",
        foreground: "var(--color-on-background)",
        primary: {
          DEFAULT: "var(--color-main)",
          foreground: "var(--color-on-main)",
        },
        secondary: {
          DEFAULT: "var(--color-support))",
          foreground: "var(--color-on-support))",
        },
        //   destructive: {
        //     DEFAULT: "hsl(var(--destructive))",
        //     foreground: "hsl(var(--destructive-foreground))",
        //   },
        //   muted: {
        //     DEFAULT: "hsl(var(--muted))",
        //     foreground: "hsl(var(--muted-foreground))",
        //   },
        //   accent: {
        //     DEFAULT: "hsl(var(--accent))",
        //     foreground: "hsl(var(--accent-foreground))",
        //   },
        //   popover: {
        //     DEFAULT: "hsl(var(--popover))",
        //     foreground: "hsl(var(--popover-foreground))",
        //   },
        //   card: {
        //     DEFAULT: "hsl(var(--card))",
        //     foreground: "hsl(var(--card-foreground))",
        //   },
        // },
        // borderRadius: {
        //   lg: "var(--radius)",
        //   md: "calc(var(--radius) - 2px)",
        //   sm: "calc(var(--radius) - 4px)",
        // },
        // keyframes: {
        //   "accordion-down": {
        //     from: { height: "0" },
        //     to: { height: "var(--radix-accordion-content-height)" },
        //   },
        //   "accordion-up": {
        //     from: { height: "var(--radix-accordion-content-height)" },
        //     to: { height: "0" },
        //   },
        // },
        // animation: {
        //   "accordion-down": "accordion-down 0.2s ease-out",
        //   "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    ...brandConfig({ htmlFontSize: 16, color: "oklch(100 0 220)" }),
  ],
};

export default config;
