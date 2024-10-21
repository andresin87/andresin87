import { cva, type VariantProps } from "class-variance-authority";

export const colorStyles = cva([], {
  variants: {
    design: {
      filled: [],
      outlined: [],
      tinted: [],
      ghost: [],
    },
    intent: {
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
    }
  },
  compoundVariants: [],
  defaultVariants: {
    design: 'filled',
    intent: 'main',
  },
});

export type ColorStyleProps = VariantProps<typeof colorStyles>;
