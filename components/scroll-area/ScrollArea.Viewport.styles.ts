import { cva, type VariantProps } from "class-variance-authority";
import { makeVariants } from "@/lib/variants";

export const scrollAreaViewportStyles = cva([""]);

export type ScrollAreaViewportStyleProps = VariantProps<
  typeof scrollAreaViewportStyles
>;
