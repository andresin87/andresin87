import { cva, type VariantProps } from "class-variance-authority";

export const scrollAreaCornerStyles = cva([]);

export type ScrollAreaCornerStyleProps = VariantProps<
  typeof scrollAreaCornerStyles
>;
