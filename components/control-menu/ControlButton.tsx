import { ReactNode, MouseEvent } from "react";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

export const ControlButton = ({
  children,
  onClick,
  className,
  ...props
}: {
  children?: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <Button
      onClick={onClick}
      className={cn("bg-[black] opacity-10 rounded-full p-2 h-10")}
      {...props}
    >
      {children}
    </Button>
  );
};
