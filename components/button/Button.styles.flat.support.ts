import { tw } from "@/lib/utils";

export const flatSupport = {
  intent: "support",
  design: "flat",
  class: tw([
    "bg-support",
    "text-on-support",
    "hover:bg-opacity-90",
    "enabled:active:bg-opacity-80",
    "focus-visible:bg-opacity-70",
  ]),
};
