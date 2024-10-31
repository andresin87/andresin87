import { cva, type VariantProps } from "class-variance-authority";
import { makeVariants } from "@/lib/variants";

export const scrollAreaScrollBarStyles = cva(
  ["relative", "flex touch-none", "select-none transition-colors rounded-full"],
  {
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
        main: ["bg-background-variant bg-opacity-50"],
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
      orientation: makeVariants<"orientation", ["vertical", "horizontal"]>({
        vertical: ["w-2.5 flex-rew border-l border-l-transparent p-[1px]"],
        horizontal: ["h-2.5 flex-col border-t border-t-transparent p-[1px]"],
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
      orientation: "vertical",
      overflow: "hidden",
    },
  },
);

export type ScrollBarStyleProps = VariantProps<
  typeof scrollAreaScrollBarStyles
>;
