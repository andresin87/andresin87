import { cva, type VariantProps } from "class-variance-authority";

export const layoutStyles = cva("min-h-screen w-dvw relative");

export type LayoutStyleProps = VariantProps<typeof layoutStyles>;
