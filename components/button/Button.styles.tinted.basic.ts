import { tw } from "@/lib/utils";

export const tintedBasic = {
  intent: "basic",
  design: "tinted",
  class: tw([
    "bg-basic-container",
    "text-on-basic-container",
    "hover:bg-basic-container hover:bg-opacity-90",
    "enabled:active:bg-basic-container-hovered hover:bg-opacity-80",
    "focus-visible:bg-basic-container-hovered hover:bg-opacity-70",
  ]),
};
