import { cva, type VariantProps } from "class-variance-authority";

import { grid } from "@/components/layout/styles";

export const layoutContentStyles = cva([
  "px-[var(--spacing-x)] py-[var(--spacing-y)]",
  "min-h-[calc(var(--w-h)-2*var(--header-h))]",
]);

export type LayoutContentStyleProps = VariantProps<typeof layoutContentStyles>;
