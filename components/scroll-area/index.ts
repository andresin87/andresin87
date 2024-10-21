import { ComponentProps, FC } from "react";

import { ScrollArea as Root } from "./ScrollArea";
import { ScrollAreaScrollBar } from "./ScrollArea.ScrollBar";
import { ScrollAreaThumb } from "./ScrollArea.Thumb";
import { ScrollAreaViewport } from "./ScrollArea.Viewport";
import { ScrollAreaCorner } from "./ScrollArea.Corner";

export { type ScrollAreaType } from "./ScrollArea";
export { type ScrollBarType } from "./ScrollArea.ScrollBar";
export { type ScrollAreaThumbType } from "./ScrollArea.Thumb";
export { type ScrollAreaViewportType } from "./ScrollArea.Viewport";
export { type ScrollAreaCornerType } from "./ScrollArea.Corner";

export type ScrollAreaProps = ComponentProps<typeof Root>;

export const ScrollArea: FC<ScrollAreaProps> & {
  ScrollBar: typeof ScrollAreaScrollBar;
  Thumb: typeof ScrollAreaThumb;
  Viewport: typeof ScrollAreaViewport;
  Corner: typeof ScrollAreaCorner;
} = Object.assign(Root, {
  ScrollBar: ScrollAreaScrollBar,
  Thumb: ScrollAreaThumb,
  Viewport: ScrollAreaViewport,
  Corner: ScrollAreaCorner,
});

ScrollArea.displayName = "ScrollArea";
ScrollArea.ScrollBar.displayName = "ScrollArea.ScrollBar";
ScrollArea.Thumb.displayName = "ScrollArea.Thumb";
ScrollArea.Viewport.displayName = "ScrollArea.Viewport";
ScrollArea.Corner.displayName = "ScrollArea.Corner";
