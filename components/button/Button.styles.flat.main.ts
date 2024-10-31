import { tw } from "@/lib/utils";

export const flatMain = {
  intent: "main",
  design: "flat",
  class: tw([
    "bg-main",
    "text-on-main",
    "hover:bg-opacity-90",
    "enabled:active:bg-opacity-80",
    "focus-visible:bg-opacity-70",
  ]),
};
