// import chroma from "chroma-js";
import Color, { PlainColorObject } from "colorjs.io";

export type ColorPalette = {
  colorBackground: PlainColorObject;
  colorOnBackground: PlainColorObject;
  colorBackgroundVariant: PlainColorObject;
  colorOnBackgroundVariant: PlainColorObject;
  colorBasic: PlainColorObject;
  colorOnBasic: PlainColorObject;
  colorBasicContainer: PlainColorObject;
  colorOnBasicContainer: PlainColorObject;
  colorMain: PlainColorObject;
  colorOnMain: PlainColorObject;
  colorMainContainer: PlainColorObject;
  colorOnMainContainer: PlainColorObject;
  colorSupport: PlainColorObject;
  colorAccent: PlainColorObject;
  colorSuccess: PlainColorObject;
  colorAlert: PlainColorObject;
  colorError: PlainColorObject;
  colorInfo: PlainColorObject;
  colorNeutral: PlainColorObject;
  colorOutline: PlainColorObject;
  colorOutlineHigh: PlainColorObject;
  colorSurface: PlainColorObject;
};

const black = new Color("black").to("oklch");
const white = new Color("white").to("oklch");
const transparent = new Color("transparent").to("oklch");

const isLight = (color: any) => new Color(color).to("oklch").l > 50;

export const getColors = (color: string): ColorPalette => {
  const colorBackground = new Color(color).to("oklch").set({
    l: isLight(color) ? 0.995 : 0.1,
    c: 0.05,
  });
  const colorOnBackground = new Color(colorBackground).set({
    l: (l) => (l > 0.5 ? 0.1 : 0.995),
    c: 0.05,
  });
  const colorBackgroundVariant = new Color(colorBackground).set({
    l: (l) => (l > 0.5 ? 0.95 : 0.15),
    c: 0.05,
  });
  const colorOnBackgroundVariant = new Color(colorBackground).set({
    l: (l) => (l > 0.5 ? 0.15 : 0.95),
    c: 0.05,
  });

  const colorBasic = new Color(color)
    .to("oklch")
    .set({ l: isLight(color) ? 0.15 : 0.9, c: 0.1 });
  const colorOnBasic = new Color(colorBasic)
    .to("oklch")
    .set({ l: isLight(color) ? 0.9 : 0.15 });
  const colorBasicContainer = new Color(colorOnBasic)
    .to("oklch")
    .set({ l: isLight(color) ? 1 : 0.2, c: 0.15 });
  const colorOnBasicContainer = new Color(colorBasic)
    .to("oklch")
    .set({ l: isLight(color) ? 0.2 : 1, c: 0.15 });

  const colorMain = new Color(color)
    .to("oklch")
    .set({ l: isLight(color) ? 0.6 : 0.4, c: 0.2 });
  const colorOnMain = isLight(colorMain) ? black : white;
  const colorMainContainer = new Color(color)
    .to("oklch")
    .set({ l: isLight(color) ? 0.9 : 0.2, c: 0.2 });
  const colorOnMainContainer = new Color(color)
    .to("oklch")
    .set({ l: isLight(color) ? 0.2 : 0.7, c: 0.2 });

  const colorOutline = new Color(color)
    .to("oklch")
    .set({ l: isLight(color) ? 0.9 : 0.3, c: 0 });
  const colorOutlineHigh = new Color(color)
    .to("oklch")
    .set({ l: isLight(color) ? 0.3 : 0.9, c: 0 });

  return {
    // background
    colorBackground,
    colorOnBackground,
    colorBackgroundVariant,
    colorOnBackgroundVariant,
    // basic
    colorBasic,
    colorOnBasic,
    colorBasicContainer,
    colorOnBasicContainer,
    // main
    colorMain,
    colorOnMain,
    colorMainContainer,
    colorOnMainContainer,
    // outline
    colorOutline,
    colorOutlineHigh,
    // others
    colorSupport: new Color(color),
    colorAccent: new Color(color),
    colorSuccess: new Color(color),
    colorAlert: new Color(color),
    colorError: new Color(color),
    colorInfo: new Color(color),
    colorNeutral: new Color(color),
    colorSurface: new Color(color),
  };
};
