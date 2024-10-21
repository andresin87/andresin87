import copy from "copy-to-clipboard";
import { useCallback, useEffect, useState } from "react";

export function useCopyToClipboard({
  value,
  timeout = 1000,
}: {
  value: string;
  timeout?: number;
}) {
  const [hasCopied, setHasCopied] = useState(false);

  const onCopy = useCallback(() => {
    setHasCopied(copy(value));
  }, [value]);

  useEffect(() => {
    let timeoutId: number | null = null;

    if (hasCopied) {
      timeoutId = window.setTimeout(() => setHasCopied(false), timeout);
    }

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [timeout, hasCopied]);

  return { onCopy, hasCopied };
}
