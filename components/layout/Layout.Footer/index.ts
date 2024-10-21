import { ComponentProps, FC } from "react";

import { LayoutFooter as Root } from "./Layout.Footer";
import { LayoutFooterContainer } from "./Layout.Footer.Container";

export { type LayoutFooterType } from "./Layout.Footer";
export { type LayoutFooterContainerType } from "./Layout.Footer.Container";

export type LayoutFooterProps = ComponentProps<typeof Root>;

export const LayoutFooter: FC<LayoutFooterProps> & {
  Container: typeof LayoutFooterContainer
} = Object.assign(Root, {
  Container: LayoutFooterContainer
});

LayoutFooter.displayName = "Layout.Footer";
LayoutFooter.Container.displayName = "Layout.Footer.Container";
