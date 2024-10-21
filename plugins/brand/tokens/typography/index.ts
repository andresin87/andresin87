import plugin from "tailwindcss/plugin";
import {
  body1,
  body2,
  callout,
  caption,
  display1,
  display2,
  display3,
  headline1,
  headline2,
  small,
  subhead,
} from "../../../../brand/typography";

export const typography = plugin.withOptions(
  () =>
    ({ addBase }: { addBase: any }) => {
      addBase({
        ".display-1": display1.styles,
        ".display-2": display2.styles,
        ".display-3": display3.styles,
        ".headline-1": headline1.styles,
        ".headline-2": headline2.styles,
        ".subhead": subhead.styles,
        ".body-1": body1.styles,
        ".body-2": body2.styles,
        ".caption": caption.styles,
        ".small": small.styles,
        ".callout": callout.styles,
      });
    },
);
