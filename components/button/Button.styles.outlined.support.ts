import { tw } from "@/lib/utils";

export const outlinedSupport = {
  intent: "support",
  design: "outlined",
  class: tw([
    "text-support",
    "hover:bg-support hover:bg-opacity-10",
    "enabled:active:bg-support enabled:active:bg-opacity-15",
    "focus-visible:bg-support focus-visible:bg-opacity-20",
  ]),
};
