import { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

import { footerStyles, type FooterStyleProps } from "./Footer.styles";

export interface FooterType
  extends ComponentPropsWithoutRef<"footer">,
    FooterStyleProps {
  children?: ReactNode;
  className?: string;
}

export const Footer = ({ children, className }: FooterType) => {
  return (
    <footer className={cn(footerStyles(), className)}>
      <div>Ʌndrēs Lucas</div>
      {children}
    </footer>
  );
};
