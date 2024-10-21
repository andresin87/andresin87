"use client";

import { forwardRef, ElementRef, ComponentPropsWithoutRef } from "react";
import { Corner } from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

import {
  scrollAreaCornerStyles,
  type ScrollAreaCornerStyleProps,
} from "./ScrollArea.Corner.styles";

export interface ScrollAreaCornerType
  extends ComponentPropsWithoutRef<typeof Corner>,
    ScrollAreaCornerStyleProps {}

export const ScrollAreaCorner = forwardRef<
  ElementRef<typeof Corner>,
  ScrollAreaCornerType
>(({ className, ...props }, ref) => (
  <Corner
    ref={ref}
    data-component={"scroll-area.corner"}
    className={cn(scrollAreaCornerStyles(), className)}
    {...props}
  />
));

ScrollAreaCorner.displayName = "ScrollArea.Corner";
