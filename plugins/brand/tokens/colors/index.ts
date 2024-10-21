import plugin from "tailwindcss/plugin";

import { kebabCase } from "change-case";

import { getColors } from "../../../../brand/color";

export const colors = plugin.withOptions(
  ({ color }: { color: string }) =>
    ({ addBase }) => {
      const colors = getColors(color);
      addBase({
        ":root": Object.entries(colors).reduce((acc, [key, value]) => {
          return {
            ...acc,
            [`--${kebabCase(key)}`]: value.toString(),
          };
        }, {}),
      });
    },
  ({ color }: { color: string }) => {
    const colors = getColors(color);
    return {
      theme: {
        extend: {
          colors: {
            ...Object.entries(colors).reduce((acc, [key]) => {
              return {
                ...acc,
                [kebabCase(key.replace("color", ""))]:
                  `var(--${kebabCase(key)})`,
              };
            }, {}),
          },
        },
      },
    };
  },
);
