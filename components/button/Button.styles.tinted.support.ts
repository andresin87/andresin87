import { tw } from "@/lib/utils";

export const tintedSupport = {
  intent: "support",
  design: "tinted",
  class: tw([
    "bg-support-container",
    "text-on-support-container",
    "hover:bg-support-container hover:bg-opacity-90",
    "enabled:active:bg-support-container-hovered hover:bg-opacity-80",
    "focus-visible:bg-support-container-hovered hover:bg-opacity-70",
  ]),
};
