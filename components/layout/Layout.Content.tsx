import {
  ComponentPropsWithoutRef,
  forwardRef,
  ReactNode,
  useMemo,
} from "react";
import { Slot } from "@/components/slot";

import { cn } from "@/lib/utils";

import {
  layoutContentStyles,
  type LayoutContentStyleProps,
} from "./Layout.Content.styles";
import { sortChildren } from "@/lib/utils";

export interface LayoutContentType
  extends ComponentPropsWithoutRef<"div">,
    LayoutContentStyleProps {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
}

export const LayoutContent = forwardRef<HTMLDivElement, LayoutContentType>(
  ({ children, className, asChild = false, ...props }, forwardedRef) => {
    const Component = asChild ? Slot : "div";

    const returnedChildren = useMemo(
      () =>
        sortChildren(
          children,
          asChild,
        )((child, find) => [
          find(child, "Layout.ContentLeftSidebar"),
          find(child, "Layout.ContentBody"),
          find(child, "Layout.Layout.ContentRightSidebar"),
        ]),
      [children, asChild, sortChildren],
    );

    return (
      <Component
        data-component="layout.content"
        ref={forwardedRef}
        className={cn(layoutContentStyles(), className)}
        {...props}
      >
        { children}
        {/*{returnedChildren}*/}
      </Component>
    );
  },
);

LayoutContent.displayName = "Layout.Content";
