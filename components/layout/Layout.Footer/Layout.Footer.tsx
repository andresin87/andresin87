import { ComponentPropsWithoutRef, ReactNode } from "react";
import {Slot, Slottable} from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

import {
  layoutFooterStyles,
  type LayoutFooterStyleProps,
} from "./Layout.Footer.styles";

export interface LayoutFooterType
  extends ComponentPropsWithoutRef<"div">,
    LayoutFooterStyleProps {
  children: ReactNode;
  className?: string;
}

export const LayoutFooter = ({ children, className }: LayoutFooterType) => {
  return (
    <Slot
      data-component="layout.footer"
      className={cn(layoutFooterStyles(), className)}
    >
      <div className="absolute top-0 -z-10 bg-background-variant opacity-75 h-full w-full"/>
      <Slottable>{children}</Slottable>
    </Slot>
  );
};

LayoutFooter.displayName = "Layout.Footer";
