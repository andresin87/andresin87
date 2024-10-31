import { cva, type VariantProps } from "class-variance-authority";
import { makeVariants } from "@/lib/variants";

import { flatBasic } from "./Button.styles.flat.basic";
import { flatMain } from "./Button.styles.flat.main";
import { flatSupport } from "./Button.styles.flat.support";
import { flatAccent } from "./Button.styles.flat.accent";
import { outlinedBasic } from "./Button.styles.outlined.basic";
import { outlinedMain } from "./Button.styles.outlined.main";
import { outlinedSupport } from "./Button.styles.outlined.support";
import { outlinedAccent } from "./Button.styles.outlined.accent";
import { tintedBasic } from "./Button.styles.tinted.basic";
import { tintedMain } from "./Button.styles.tinted.main";
import { tintedSupport } from "./Button.styles.tinted.support";
import { tintedAccent } from "./Button.styles.tinted.accent";
import { ghostBasic } from "./Button.styles.ghost.basic";
import { ghostMain } from "./Button.styles.ghost.main";
import { ghostSupport } from "./Button.styles.ghost.support";
import { ghostAccent } from "./Button.styles.ghost.accent";

const compoundVariants = [
  flatBasic,
  outlinedBasic,
  tintedBasic,
  ghostBasic,
  flatMain,
  flatSupport,
  outlinedMain,
  outlinedSupport,
  tintedMain,
  tintedSupport,
  ghostMain,
  ghostSupport,
  flatAccent,
  outlinedAccent,
  tintedAccent,
  ghostAccent,
];

export const buttonStyles = cva(
  [
    "inline-flex items-center justify-center",
    "whitespace-nowrap",
    "rounded-md",
    "transition-colors",
    "callout",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-halo focus-visible:ring-offset-1 focus-visible:ring-offset-on-halo",
    "disabled:pointer-events-none disabled:bg-opacity-50",
  ],
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
        main: [],
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
      design: makeVariants<"design", ["flat", "outlined", "tinted", "ghost"]>({
        flat: [],
        outlined: ["bg-transparent", "border-current", "border-2"],
        tinted: [],
        ghost: [],
      }),
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      intent: "main",
      design: "flat",
      size: "default",
    },
    compoundVariants: [...compoundVariants],
  },
);

export type ButtonStyleProps = VariantProps<typeof buttonStyles>;
