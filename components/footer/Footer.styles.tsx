import { cva, type VariantProps } from "class-variance-authority";

export const footerStyles = cva(["text-xl font-black"]);

export type FooterStyleProps = VariantProps<typeof footerStyles>;
