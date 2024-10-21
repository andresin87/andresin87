import { ComponentProps, FC } from "react";

import { Layout as Root } from "./Layout";
import { LayoutHeader } from "./Layout.Header";
import { LayoutContent } from "./Layout.Content";
import { LayoutFooter } from "./Layout.Footer";
import { LayoutScrollArea } from "./Layout.ScrollArea";
import { LayoutGrid } from "./Layout.Grid";

export {
  type LayoutHeaderType,
  type LayoutHeaderContainerType,
  type LayoutHeaderLogoType,
} from "./Layout.Header";
export { type LayoutContentType } from "./Layout.Content";
export {
  type LayoutFooterType,
  type LayoutFooterContainerType,
} from "./Layout.Footer";
export { type LayoutScrollAreaType } from "./Layout.ScrollArea";
export { type LayoutGridType } from "./Layout.Grid";

export type LayoutProps = ComponentProps<typeof Root>;

export const Layout: FC<LayoutProps> & {
  Header: typeof LayoutHeader;
  ScrollArea: typeof LayoutScrollArea;
  Content: typeof LayoutContent;
  Footer: typeof LayoutFooter;
  Grid: typeof LayoutGrid;
} = Object.assign(Root, {
  Header: LayoutHeader,
  ScrollArea: LayoutScrollArea,
  Content: LayoutContent,
  Footer: LayoutFooter,
  Grid: LayoutGrid,
});

Layout.displayName = "Layout";
Layout.Header.displayName = "Layout.Header";
Layout.Content.displayName = "Layout.Content";
Layout.Footer.displayName = "Layout.Footer";
Layout.ScrollArea.displayName = "Layout.ScrollArea";
Layout.Grid.displayName = "Layout.Grid";
