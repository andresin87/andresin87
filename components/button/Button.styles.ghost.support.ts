import { tw } from "@/lib/utils";

export const ghostSupport = {
  intent: "support",
  design: "ghost",
  class: tw([
    "bg-support-container bg-opacity-0",
    "text-support",
    "hover:bg-support-container hover:bg-opacity-90",
    "enabled:active:bg-support-container hover:bg-opacity-20",
    "focus-visible:bg-support-container hover:bg-opacity-30",
  ]),
};
