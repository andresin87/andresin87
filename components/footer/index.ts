import { ComponentProps, FC } from "react";

import { Footer as Root } from "./Footer";

export type FooterProps = ComponentProps<typeof Root>;

export const Footer: FC<FooterProps> & {} = Object.assign(Root, {});
