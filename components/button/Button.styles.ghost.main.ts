import { tw } from "@/lib/utils";

export const ghostMain = {
  intent: "main",
  design: "ghost",
  class: tw([
    "bg-main-container bg-opacity-0",
    "text-main",
    "hover:bg-main-container hover:bg-opacity-90",
    "enabled:active:bg-main-container hover:bg-opacity-20",
    "focus-visible:bg-main-container hover:bg-opacity-30",
  ]),
};
