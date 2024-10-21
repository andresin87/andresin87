import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export const Content = ({
  asChild,
  children,
}: {
  asChild?: boolean;
  children?: ReactNode;
}) => {
  const Component = asChild ? Slot : "div";
  return <Component className="col-span-10 mt-52">{children}</Component>;
};
