import { tw } from "@/lib/utils";

export const flatBasic = {
  intent: "basic",
  design: "flat",
  class: tw([
    "bg-basic",
    "text-on-basic",
    "hover:bg-opacity-90",
    "enabled:active:bg-opacity-80",
    "focus-visible:bg-opacity-70",
  ]),
};
