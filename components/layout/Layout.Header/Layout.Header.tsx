import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

import {
  layoutHeaderStyles,
  type LayoutHeaderStyleProps,
} from "./Layout.Header.styles";

export interface LayoutHeaderType
  extends ComponentPropsWithoutRef<"div">,
    LayoutHeaderStyleProps {
  children: ReactNode;
  className?: string;
}

export const LayoutHeader = ({ children, className }: LayoutHeaderType) => {
  return (
    <>
      <Slot
        data-component="layout.header"
        className={cn(layoutHeaderStyles(), className)}
      >
        <div className="absolute top-0 -z-10 bg-background-variant opacity-75 h-full w-full"></div>
        <Slottable>{children}</Slottable>
      </Slot>
      {/*<div className="absolute md:top-0 py-2 sm:py-3 lg:py-10 h-[52px] sm:h-[60px] lg:h-[116px]"></div>*/}
    </>
  );
};

LayoutHeader.displayName = "Layout.Header";
