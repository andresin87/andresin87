import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

import {
  layoutFooterContainerStyles,
  type LayoutFooterContainerStyleProps,
} from "./Layout.Footer.Container.styles";

export interface LayoutFooterContainerType
  extends ComponentPropsWithoutRef<"div">,
    LayoutFooterContainerStyleProps {
  children: ReactNode;
  className?: string;
}

export const LayoutFooterContainer = ({
  children,
  className,
}: LayoutFooterContainerType) => {
  return (
    <Slot
      data-component="layout.footer.container"
      className={cn(layoutFooterContainerStyles(), className)}
    >
      {children}
    </Slot>
  );
};

LayoutFooterContainer.displayName = "Layout.Footer.Container";
