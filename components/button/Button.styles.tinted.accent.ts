import { tw } from "@/lib/utils";

export const tintedAccent = {
  intent: "accent",
  design: "tinted",
  class: tw([
    "bg-accent-container",
    "text-on-accent-container",
    "hover:bg-accent-container hover:bg-opacity-90",
    "enabled:active:bg-accent-container-hovered hover:bg-opacity-80",
    "focus-visible:bg-accent-container-hovered hover:bg-opacity-70",
  ]),
};
