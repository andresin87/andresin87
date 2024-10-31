import { tw } from "@/lib/utils";

export const ghostAccent = {
  intent: "accent",
  design: "ghost",
  class: tw([
    "bg-accent-container bg-opacity-0",
    "text-accent",
    "hover:bg-accent-container hover:bg-opacity-90",
    "enabled:active:bg-accent-container hover:bg-opacity-20",
    "focus-visible:bg-accent-container hover:bg-opacity-30",
  ]),
};
