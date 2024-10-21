import { cva, type VariantProps } from "class-variance-authority";
import { makeVariants } from "@/lib/variants";

export const buttonStyles = cva(
  [
    "inline-flex items-center justify-center",
    "whitespace-nowrap",
    "rounded-md",
    "text-sm font-medium",
    "transition-colors",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      intent: makeVariants<
        "intent",
        [
          "main",
          "support",
          // "accent",
          // "basic",
          // "success",
          // "alert",
          // "danger",
          // "info",
          // "neutral",
          // "surface",
        ]
      >({
        main: ["bg-main text-on-main shadow hover:bg-main/90"],
        support: ["bg-support text-on-support shadow-sm hover:bg-support/90"],
      }),
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      intent: "default",
      size: "default",
    },
  },
);

export type ButtonStyleProps = VariantProps<typeof buttonStyles>;
