import plugin from "tailwindcss/plugin";

import { kebabCase } from "change-case";

import { getColors } from "../../../../brand/color";

export const colors = plugin.withOptions(
  ({
    color,
    dark,
    bright,
  }: {
    color: string;
    dark?: string;
    bright?: string;
  }) =>
    ({ addBase }) => {
      const colors = getColors(color, { dark, bright });
      addBase({
        ":root": Object.entries(colors).reduce((acc, [key, value]) => {
          return {
            ...acc,
            [`--${kebabCase(key)}`]: `${Math.round(value.l * 100 * 1000) / 1000}% ${value.c} ${value.h}`,
          };
        }, {}),
      });
    },
  ({
    color,
    dark,
    bright,
  }: {
    color: string;
    dark?: string;
    bright?: string;
  }) => {
    const colors = getColors(color, { dark, bright });
    console.log(Object.entries(colors).map(([key, value]) => [key, value.coords]))
    return {
      theme: {
        extend: {
          colors: {
            ...Object.entries(colors).reduce((acc, [key]) => {
              return {
                ...acc,
                [kebabCase(key.replace("color", ""))]:
                  `oklch(var(--${kebabCase(key)}) / <alpha-value>)`,
              };
            }, {}),
          },
        },
      },
    };
  },
);
