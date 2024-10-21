import { cva, type VariantProps } from "class-variance-authority";

import { grid } from "@/components/layout/styles";

export const layoutHeaderStyles = cva([
  ...grid,
  "px-[var(--spacing-x)] py-[var(--spacing-y)]",
  "absolute",
  "h-18",
  "bottom-0",
  "md:top-0 md:fixed md:h-fit",
  "backdrop-blur-sm",
  "z-10",
  "text-on-background-variant",
]);

export type LayoutHeaderStyleProps = VariantProps<typeof layoutHeaderStyles>;
