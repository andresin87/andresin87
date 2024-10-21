"use client";

import { forwardRef, ElementRef, ComponentPropsWithoutRef } from "react";
import { ScrollAreaScrollbar } from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";
import { scrollAreaScrollBarStyles, type ScrollBarStyleProps } from "./ScrollArea.ScrollBar.styles";
import { ScrollAreaThumb } from "./ScrollArea.Thumb";

export interface ScrollBarType
  extends Omit<
      ComponentPropsWithoutRef<typeof ScrollAreaScrollbar>,
      "orientation"
    >,
    ScrollBarStyleProps {
  className?: string;
  orientation?: "vertical" | "horizontal";
  overflow?: "auto" | "hidden" | "scroll" | "visible";
}

export const ScrollAreaScrollBar = forwardRef<
  ElementRef<typeof ScrollAreaScrollbar>,
  ScrollBarType
>(
  (
    {
      className,
      orientation = "vertical",
      overflow,
      intent = "main",
      ...props
    },
    ref,
  ) => (
    <ScrollAreaScrollbar
      ref={ref}
      data-component={"scroll-bar"}
      className={cn(scrollAreaScrollBarStyles({ intent, overflow }), className)}
      orientation={orientation}
      {...props}
    >
      <ScrollAreaThumb
        intent={intent}
        className={"relative flex-1 rounded-full"}
      />
    </ScrollAreaScrollbar>
  ),
);

ScrollAreaScrollBar.displayName = "ScrollBar";
