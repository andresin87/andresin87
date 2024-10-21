import React, {
  type FC,
  isValidElement,
  type ReactElement,
  type ReactNode,
  Children,
} from "react";

import { getElementDisplayName } from "./getElementDisplayName";

export type FindElementType = (
  children: ReactNode,
  value: string,
) => ReactElement | undefined;

export const findElement = (children: ReactNode, value: string) => {
  return Children.toArray(children)
    .filter(isValidElement)
    .find((child) => value === getElementDisplayName(child) || "");
};
