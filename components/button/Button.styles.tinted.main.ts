import { tw } from "@/lib/utils";

export const tintedMain = {
  intent: "main",
  design: "tinted",
  class: tw([
    "bg-main-container",
    "text-on-main-container",
    "hover:bg-main-container hover:bg-opacity-90",
    "enabled:active:bg-main-container-hovered hover:bg-opacity-80",
    "focus-visible:bg-main-container-hovered hover:bg-opacity-70",
  ]),
};
