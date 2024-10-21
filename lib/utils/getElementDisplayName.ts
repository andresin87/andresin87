import type { FC, ReactElement } from "react";

export const getElementDisplayName = (element?: ReactElement) => {
  return element
    ? (element.type as FC & { displayName?: string }).displayName
    : "";
};
