import { tw } from "@/lib/utils";

export const outlinedMain = {
  intent: "main",
  design: "outlined",
  class: tw([
    "text-main",
    "hover:bg-main hover:bg-opacity-10",
    "enabled:active:bg-main enabled:active:bg-opacity-15",
    "focus-visible:bg-main focus-visible:bg-opacity-20",
  ]),
};
