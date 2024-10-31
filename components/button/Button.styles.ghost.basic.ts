import { tw } from "@/lib/utils";

export const ghostBasic = {
  intent: "basic",
  design: "ghost",
  class: tw([
    "bg-basic-container bg-opacity-0",
    "text-basic",
    "hover:bg-basic-container hover:bg-opacity-90",
    "enabled:active:bg-basic-container hover:bg-opacity-20",
    "focus-visible:bg-basic-container hover:bg-opacity-30",
  ]),
};
