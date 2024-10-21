import { forwardRef, ComponentPropsWithoutRef } from "react";
import { ScrollAreaThumb as RadixScrollAreaThumb } from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

import {
  type ScrollAreaThumbStyleProps,
  scrollAreaThumbStyles,
} from "./ScrollArea.Thumb.styles";

export interface ScrollAreaThumbType
  extends ComponentPropsWithoutRef<typeof RadixScrollAreaThumb>,
    ScrollAreaThumbStyleProps {
  className?: string;
}

export const ScrollAreaThumb = forwardRef<HTMLDivElement, ScrollAreaThumbType>(
  ({ className, intent = "main", ...props }, forwardedRef) => (
    <RadixScrollAreaThumb
      ref={forwardedRef}
      data-component={"scroll-area-thumb"}
      className={cn(scrollAreaThumbStyles({ intent }), className)}
      {...props}
    />
  ),
);

ScrollAreaThumb.displayName = RadixScrollAreaThumb.displayName;
