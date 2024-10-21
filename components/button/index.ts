import { ComponentProps, FC } from "react";

import { Button as Root } from "./Button";

export { type ButtonType } from "./Button";

export type ButtonProps = ComponentProps<typeof Root>;

export const Button: FC<ButtonProps> & {} = Object.assign(Root, {});

Button.displayName = "Button";
