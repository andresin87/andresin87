import { ComponentProps, FC } from "react";

import { LayoutHeader as Root } from "./Layout.Header";
import { LayoutHeaderLogo } from "./Layout.Header.Logo";
import { LayoutHeaderContainer } from "./Layout.Header.Container";

export { type LayoutHeaderType } from "./Layout.Header";
export { type LayoutHeaderLogoType } from "./Layout.Header.Logo";
export { type LayoutHeaderContainerType } from "./Layout.Header.Container";

export type LayoutHeaderProps = ComponentProps<typeof Root>;

export const LayoutHeader: FC<LayoutHeaderProps> & {
  Logo: typeof LayoutHeaderLogo
  Container: typeof LayoutHeaderContainer
} = Object.assign(Root, {
  Logo: LayoutHeaderLogo,
  Container: LayoutHeaderContainer
});

LayoutHeader.displayName = "Layout.Header";
LayoutHeader.Logo.displayName = "Layout.Header.Logo";
LayoutHeader.Container.displayName = "Layout.Header.Container";
