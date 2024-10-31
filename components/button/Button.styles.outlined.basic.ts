import { tw } from "@/lib/utils";

export const outlinedBasic = {
  intent: "basic",
  design: "outlined",
  class: tw([
    "text-basic",
    "hover:bg-basic hover:bg-opacity-10",
    "enabled:active:bg-basic enabled:active:bg-opacity-15",
    "focus-visible:bg-basic focus-visible:bg-opacity-20",
  ]),
};
