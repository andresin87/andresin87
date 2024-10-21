import { forwardRef, ComponentPropsWithoutRef, ReactNode } from "react";
import { Root, Viewport, Corner } from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

import {
  type ScrollAreaStyleProps,
  scrollAreaStyles,
} from "./ScrollArea.styles";

import { ScrollAreaScrollBar } from "./ScrollArea.ScrollBar";

export interface ScrollAreaType
  extends ComponentPropsWithoutRef<typeof Root>,
    ScrollAreaStyleProps {
  className?: string;
  overflow?: "auto" | "hidden" | "scroll" | "visible";
}

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaType>(
  ({ className, overflow, intent = "main", ...props }, ref) => (
    <Root
      ref={ref}
      data-component={"scroll-area"}
      className={cn(scrollAreaStyles({ intent, overflow }), className)}
      {...props}
    />
  ),
);

ScrollArea.displayName = Root.displayName;
