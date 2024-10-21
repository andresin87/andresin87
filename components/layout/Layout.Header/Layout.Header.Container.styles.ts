import { cva, type VariantProps } from "class-variance-authority";

export const layoutHeaderContainerStyles = cva([
  "grid items-center justify-between grid-flow-col h-9",
  "col-span-1",
  "xs:col-span-2",
  "sm:col-span-3",
  "md:col-span-6",
  "lg:col-span-10",
  "xl:col-span-12",
]);

export type LayoutHeaderContainerStyleProps = VariantProps<typeof layoutHeaderContainerStyles>;
