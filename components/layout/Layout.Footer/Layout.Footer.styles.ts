import { cva, type VariantProps } from "class-variance-authority";

import { grid } from "@/components/layout/styles";

export const layoutFooterStyles = cva([
  ...grid,
  "sticky bottom-0 h-[var(--header-h)] self-end",
  "px-[var(--spacing-x)] py-[var(--spacing-y)]",
  "hidden",
  "md:grid",
  "bg-background-variant text-on-background-variant",
  "[clip-path:polygon(0_0,100%_55%,100%_100%,0%_100%);]",
]);

export type LayoutFooterStyleProps = VariantProps<typeof layoutFooterStyles>;
