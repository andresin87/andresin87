import { Fragment, isValidElement, ReactNode, createElement } from "react";

import { findElement, type FindElementType } from "@/lib/utils";

export const sortChildren = (children: ReactNode, asChild: boolean) => {
  const isChilded = asChild && isValidElement(children);
  const child = isChilded ? children?.props.children : children;
  const { children: _, ...rest } = isChilded ? children?.props : {};
  const type = isChilded ? children?.type : Fragment;
  return ((children: ReactNode, find: FindElementType) => {
    return (replacer) => {
      return createElement(type, rest, replacer(children, find));
    };
  })(child, findElement);
};
