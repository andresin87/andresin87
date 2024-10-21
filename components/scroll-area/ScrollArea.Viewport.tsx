import { forwardRef, ComponentPropsWithoutRef } from "react";
import { Viewport as RadixViewport } from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

import {
  type ScrollAreaViewportStyleProps,
  scrollAreaViewportStyles,
} from "./ScrollArea.Viewport.styles";

export interface ScrollAreaViewportType
  extends ComponentPropsWithoutRef<typeof RadixViewport>,
    ScrollAreaViewportStyleProps {
  className?: string;
}

export const ScrollAreaViewport = forwardRef<
  HTMLDivElement,
  ScrollAreaViewportType
>(({ className, ...props }, forwardedRef) => (
  <RadixViewport
    ref={forwardedRef}
    data-component={"scroll-area-viewport"}
    className={cn(scrollAreaViewportStyles(), className)}
    {...props}
  />
));

ScrollAreaViewport.displayName = "ScrollAreaViewport";
