import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

import {
  layoutHeaderLogoStyles,
  type LayoutHeaderLogoStyleProps,
} from "./Layout.Header.Logo.styles";

export interface LayoutHeaderLogoType
  extends ComponentPropsWithoutRef<"div">,
    LayoutHeaderLogoStyleProps {
  children: ReactNode;
  className?: string;
}

export const LayoutHeaderLogo = ({
  children,
  className,
}: LayoutHeaderLogoType) => {
  return (
    <Slot
      data-component="layout.header"
      className={cn(layoutHeaderLogoStyles(), className)}
    >
      {children}
    </Slot>
  );
};

LayoutHeaderLogo.displayName = "Layout.Header.Logo";
