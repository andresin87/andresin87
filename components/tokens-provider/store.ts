import { createStore } from "zustand/vanilla";
import { devtools, persist } from "zustand/middleware";
import Color, { PlainColorObject } from "colorjs.io";

import { getColors } from "@/brand/color";

export type TokenState = {
  size: number;
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
  colorSurface: PlainColorObject;
};

export type TokenActions = {
  setToken: (name: string, value: string) => void;
};

export type TokenStore = TokenState & TokenActions;

const getDefaultTokenState = ({
  size,
  color,
}: {
  size: number;
  color: string;
}): TokenState => {
  const colors = getColors(color);

  return {
    size,
    ...colors,
  };
};

export const defaultTokenState: TokenState = getDefaultTokenState({
  size: 16,
  color: "oklch(100 0 220)",
});

export const createTokenStore = (initState: TokenState = defaultTokenState) => {
  return createStore<TokenStore>()(
    devtools(
      // persist(
      (set: any, get: any) => ({
        ...initState,
        setToken: (name: string, value: string) => {
          const state = get();
          return { ...state, name: value };
        },
      }),
      //   {
      //     name: "token-store",
      //   },
      // ),
    ),
  );
};
