import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

import { buttonStyles, type ButtonStyleProps } from "./Button.styles";

export interface ButtonType
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyleProps {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonType>(
  ({ className, intent, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonStyles({ intent, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
