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
  colorOnSupport: PlainColorObject;
  colorSupportContainer: PlainColorObject;
  colorOnSupportContainer: PlainColorObject;
  colorAccent: PlainColorObject;
  colorOnAccent: PlainColorObject;
  colorAccentContainer: PlainColorObject;
  colorOnAccentContainer: PlainColorObject;
  colorSuccess: PlainColorObject;
  colorAlert: PlainColorObject;
  colorError: PlainColorObject;
  colorInfo: PlainColorObject;
  colorNeutral: PlainColorObject;
  colorOutline: PlainColorObject;
  colorOutlineHigh: PlainColorObject;
  colorHalo: PlainColorObject;
  colorOnHalo: PlainColorObject;
  colorSurface: PlainColorObject;
};

const transparent = new Color("transparent").to("oklch");

const isLight = (color: any) => new Color(color).to("oklch").l > 50;

export const getColors = (
  color: string,
  settings: { dark?: string; bright?: string },
): ColorPalette => {
  const hasDark = settings.dark !== undefined;
  const hasBright = settings.dark !== undefined;

  const clr = new Color(color).to("oklch");

  const dark = hasDark
    ? new Color(settings.dark).to("oklch")
    : new Color("#030303").to("oklch");
  if (dark.h === NaN) {
    dark.set({ h: clr.h });
  }
  const bright = hasBright
    ? new Color(settings.bright).to("oklch")
    : new Color("#0D0D0D").to("oklch");
  if (bright.h === NaN) {
    bright.set({ h: clr.h });
  }
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
    .set({ l: 0.2,  c: 0.2 });
  const colorOnBasic = new Color(colorBasic)
    .to("oklch")
    .set({ l: 1, c: 0 });
  const colorBasicContainer = new Color(colorOnBasic)
    .to("oklch")
    .set({ l: 1, c: 0.1 });
  const colorOnBasicContainer = new Color(colorBasic)
    .to("oklch")
    .set({ l: 0, c: 0 });

  const colorMain = new Color(color).to("oklch").set({ l: 0.5, c: 0.5 });
  const colorOnMain = new Color(color).to("oklch").set({ l: 1, c: 0 });
  const colorMainContainer = new Color(color)
    .to("oklch")
    .set({ l: 0.9, c: 0.1 });
  const colorOnMainContainer = new Color(color)
    .to("oklch")
    .set({ l: 0.2, c: 0.1 });

  const _colorSupport = new Color(color).to("oklch").set({ l: 0.5, c: 0.2 });
  const colorSupport = new Color(_colorSupport).to("oklch").set({});
  const colorOnSupport = new Color(_colorSupport)
    .to("oklch")
    .set({ l: 1, c: 0 });
  const colorSupportContainer = new Color(_colorSupport)
    .to("oklch")
    .set({ l: 0.9, c: 0.05 });
  const colorOnSupportContainer = new Color(_colorSupport)
    .to("oklch")
    .set({ l: 0.2, c: 0.1 });

  const _colorAccent = new Color(color).to("oklch").set({ l: 0.5, c: 1 });
  const colorAccent = new Color(_colorAccent).to("oklch").set({});
  const colorOnAccent = new Color(_colorAccent)
    .to("oklch")
    .set({ l: 1, c: 0 });
  const colorAccentContainer = new Color(_colorAccent)
    .to("oklch")
    .set({ l: 0.9, c: 0.05 });
  const colorOnAccentContainer = new Color(_colorAccent)
    .to("oklch")
    .set({ l: 0.2, c: 0.1 });

  const colorOutline = new Color(color)
    .to("oklch")
    .set({ l: isLight(color) ? 0.9 : 0.3, c: 0 });
  const colorOutlineHigh = new Color(color)
    .to("oklch")
    .set({ l: isLight(color) ? 0.3 : 0.9, c: 0 });

  const colorHalo = new Color(color)
    .to("oklch")
    .set({ l: isLight(color) ? 0 : 1, c: 0 });
  const colorOnHalo = new Color(color)
    .to("oklch")
    .set({ l: isLight(color) ? 1 : 0, c: 0 });

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
    // support
    colorSupport,
    colorOnSupport,
    colorSupportContainer,
    colorOnSupportContainer,
    // accent
    colorAccent,
    colorOnAccent,
    colorAccentContainer,
    colorOnAccentContainer,
    // outline
    colorOutline,
    colorOutlineHigh,
    // halo
    colorHalo,
    colorOnHalo,
    // others
    colorSuccess: new Color(color),
    colorAlert: new Color(color),
    colorError: new Color(color),
    colorInfo: new Color(color),
    colorNeutral: new Color(color),
    colorSurface: new Color(color),
  };
};
