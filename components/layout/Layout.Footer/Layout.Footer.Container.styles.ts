import { cva, type VariantProps } from "class-variance-authority";

export const layoutFooterContainerStyles = cva([
  "flex items-center justify-between h-9",
  "col-span-1",
  "xs:col-span-2",
  "sm:col-span-3",
  "md:col-span-6",
  "lg:col-span-10",
  "xl:col-span-12",
]);

export type LayoutFooterContainerStyleProps = VariantProps<
  typeof layoutFooterContainerStyles
>;
