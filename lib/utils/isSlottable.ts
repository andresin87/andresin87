import { ReactNode, ReactElement, isValidElement } from "react";
import { Slottable } from "@radix-ui/react-slot";

export function isSlottable(child: ReactNode): child is ReactElement {
  return isValidElement(child) && child.type === Slottable;
}
