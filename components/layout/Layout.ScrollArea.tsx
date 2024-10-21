import {
  ComponentPropsWithoutRef,
  forwardRef,
  ReactNode,
  useMemo,
} from "react";

import { ScrollArea } from "@/components/scroll-area";
import { cn, sortChildren } from "@/lib/utils";

import {
  layoutScrollAreaStyles,
  type LayoutScrollAreaStyleProps,
} from "./Layout.ScrollArea.styles";

export interface LayoutScrollAreaType
  extends ComponentPropsWithoutRef<"div">,
    LayoutScrollAreaStyleProps {
  children: ReactNode;
  className?: string;
}

export const LayoutScrollArea = forwardRef<
  HTMLDivElement,
  LayoutScrollAreaType
>(({ className, children, ...props }, forwardedRef) => {
  const returnedChildren = useMemo(
    () =>
      sortChildren(
        children,
        false,
      )((child, find) => [
        find(child, "Layout.Content"),
        <div key="layout-content-padding-footer" className="w-full h-[var(--header-h)]" />,
        <div
          key="layout-footer-wrapper"
          className="flex h-[calc(var(--header-h)*4)] absolute bottom-0"
        >
          {find(child, "Layout.Footer")}
        </div>,
      ]),
    [children, sortChildren],
  );

  return (
    <ScrollArea
      ref={forwardedRef}
      className={cn(layoutScrollAreaStyles(), className)}
      type="always"
      intent="main"
      overflow="visible"
      {...props}
    >
      <ScrollArea.Viewport className="h-full w-full rounded-[inherit]">
        <div
          data-component={"layout.scroll-area-container"}
          className="pt-[var(--header-h)] min-h-[calc(var(--w-h)-var(--header-h))] mb-[calc(var(--header-h)_*-1)] relative"
        >
          {returnedChildren}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.ScrollBar
        overflow="visible"
        className={cn(
          "top-[var(--header-h)_!important]",
          "bottom-[var(--header-h)_!important]",
          "right-[calc(calc(var(--spacing-x)_-_0.625rem)_/_2)_!important]",
          "my-[var(--spacing-y)]",
        )}
      />
      <ScrollArea.Corner />
    </ScrollArea>
  );
});

LayoutScrollArea.displayName = "Layout.ScrollArea";
