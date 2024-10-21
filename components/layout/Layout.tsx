import {
  ReactNode,
  forwardRef,
  ComponentPropsWithoutRef,
  useMemo,
} from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

import { layoutStyles, LayoutStyleProps } from "./Layout.styles";
import { sortChildren } from "@/lib/utils";

export interface LayoutType
  extends ComponentPropsWithoutRef<"div">,
    LayoutStyleProps {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
}

export const Layout = forwardRef<HTMLDivElement, LayoutType>(
  ({ className, children, asChild = false, ...props }, forwardedRef) => {
    const Component = asChild ? Slot : "div";

    const returnedChildren = useMemo(
      () =>
        sortChildren(
          children,
          asChild,
        )((child, find) => [
          find(child, "Layout.Header"),
          find(child, "Layout.ScrollArea"),
          find(child, "Layout.Grid"),
        ]),
      [children, asChild, sortChildren],
    );

    return (
      <Component
        data-component="layout"
        ref={forwardedRef}
        className={cn(layoutStyles(), className)}
        {...props}
      >
        {returnedChildren}
      </Component>
    );
  },
);

Layout.displayName = "Layout";
