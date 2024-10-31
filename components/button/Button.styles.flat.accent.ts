import { tw } from "@/lib/utils";

export const flatAccent = {
  intent: "accent",
  design: "flat",
  class: tw([
    "bg-accent",
    "text-on-accent",
    "hover:bg-opacity-90",
    "enabled:active:bg-opacity-80",
    "focus-visible:bg-opacity-70",
  ]),
};
