import { cva, type VariantProps } from "class-variance-authority";

export const layoutScrollAreaStyles = cva(
  "h-[var(--w-h)] absolute top-0 bottom-0",
);

export type LayoutScrollAreaStyleProps = VariantProps<
  typeof layoutScrollAreaStyles
>;
