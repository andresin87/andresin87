import { cva, type VariantProps } from "class-variance-authority";
import { makeVariants } from "@/lib/variants";

export const scrollAreaStyles = cva(["relative overflow-hidden"], {
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
      main: ["bg-[color-mix(in oklch, var(-c-primary), transparent 80%)]"],
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
    overflow: {
      hidden: ["overflow-hidden"],
      visible: ["overflow-visible"],
      auto: ["overflow-auto"],
      scroll: ["overflow-scroll"],
    },
  },
  defaultVariants: {
    intent: "main",
    overflow: "hidden",
  },
});

export type ScrollAreaStyleProps = VariantProps<typeof scrollAreaStyles>;
