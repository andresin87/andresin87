import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

import {
  layoutHeaderContainerStyles,
  type LayoutHeaderContainerStyleProps,
} from "./Layout.Header.Container.styles";

export interface LayoutHeaderContainerType
  extends ComponentPropsWithoutRef<"div">,
    LayoutHeaderContainerStyleProps {
  children: ReactNode;
  className?: string;
}

export const LayoutHeaderContainer = ({
  children,
  className,
}: LayoutHeaderContainerType) => {
  return (
    <Slot
      data-component="layout.header.container"
      className={cn(layoutHeaderContainerStyles(), className)}
    >
      {children}
    </Slot>
  );
};

LayoutHeaderContainer.displayName = "Layout.Header.Container";
