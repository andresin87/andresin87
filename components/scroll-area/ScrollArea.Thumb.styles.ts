import { cva, type VariantProps } from "class-variance-authority";
import { makeVariants } from "@/lib/variants";

export const scrollAreaThumbStyles = cva(["relative flex-1 rounded-full]"], {
  variants: {
    intent: makeVariants<
      "intent",
      [
        "main",
        "support",
        "accent",
        "basic",
        "success",
        "alert",
        "danger",
        "info",
        "neutral",
        "surface",
      ]
    >({
      main: ["bg-[color-mix(in_oklch,var(--color-main),transparent_70%)]"],
      support: [],
      accent: [],
      basic: [],
      success: [],
      alert: [],
      danger: [],
      info: [],
      neutral: [],
      surface: [],
    }),
  },
  defaultVariants: {
    intent: "main",
  },
});

export type ScrollAreaThumbStyleProps = VariantProps<
  typeof scrollAreaThumbStyles
>;
