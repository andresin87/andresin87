"use client";

import { cn } from "@/lib/utils";
import { useCopyToClipboard } from "@/hooks";
import { Button, ButtonProps } from "@/components/ui/button";
import { IconCopy, IconCheck, IconProps } from "@tabler/icons-react";

interface CopyToClipboardButtonProps extends Omit<ButtonProps, "children"> {
  text: string;
  iconProps?: IconProps;
  className?: string;
}

export const CopyToClipboardButton = ({
  variant = "ghost",
  text,
  iconProps,
  className,
  ...props
}: CopyToClipboardButtonProps) => {
  const { onCopy, hasCopied } = useCopyToClipboard({ value: text });

  return (
    <Button
      className={cn("px-2 -mx-2", className)}
      onClick={onCopy}
      variant={variant}
      {...props}
    >
      {hasCopied ? (
        <IconCheck aria-label="copied to the keyboard" {...iconProps} />
      ) : (
        <IconCopy aria-label="copy to clipboard" {...iconProps} />
      )}
    </Button>
  );
};
