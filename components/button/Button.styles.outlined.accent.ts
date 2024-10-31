import { tw } from "@/lib/utils";

export const outlinedAccent = {
  intent: "accent",
  design: "outlined",
  class: tw([
    "text-accent",
    "hover:bg-accent hover:bg-opacity-10",
    "enabled:active:bg-accent enabled:active:bg-opacity-15",
    "focus-visible:bg-accent focus-visible:bg-opacity-20",
  ]),
};
