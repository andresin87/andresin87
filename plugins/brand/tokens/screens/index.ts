import plugin from "tailwindcss/plugin";
import { screens as brandScreens } from "../../../../brand/screens";

const headerHeight = {
  xs: "52px",
  sm: "60px",
  md: "60px",
  lg: "116px",
  xl: "116px",
  "2xl": "116px",
};

const contentSpacingX = {
  xs: "1rem",
  sm: "1.25rem",
  md: "1.25rem",
  lg: "2.5rem",
  xl: "2.5rem",
  "2xl": "2.5rem",
};

const contentSpacingY = {
  xs: "0.75rem",
  sm: "0.75rem",
  md: "0.75rem",
  lg: "2.5rem",
  xl: "2.5rem",
  "2xl": "2.5rem",
};

/**
 * Variables do not work inside media queries and container queries.
 * You can use the var() function in any part of a value in any property
 * on an element. You cannot use var() for property names, selectors, or
 * anything aside from property values, which means you can't use it in
 * a media query or container query.
 * **/
export const screens = plugin.withOptions(
  () =>
    ({ addBase }) => {
      addBase({
        ":root": {
          ...Object.entries(brandScreens).reduce(
            (acc, [key, value]) => ({
              ...acc,
              [`--screen-${key}`]: value,
            }),
            {
              "--spacing-x": "1rem",
              "--spacing-y": "0.75rem",
            },
          ),
        },
        ...Object.entries(brandScreens).reduce((acc, [key, value]) => {
          return {
            ...acc,
            [`@media (min-width: ${value})`]: {
              ":root": {
                "--header-h": headerHeight[key],
                "--spacing-x": contentSpacingX[key],
                "--spacing-y": contentSpacingY[key],
              },
            },
          };
        }, {}),
      });
    },
  () => ({
    theme: {
      extend: {
        screens: Object.entries(brandScreens).reduce((acc, [key, value]) => {
          return {
            ...acc,
            [key]: value,
          };
        }, {}),
      },
    },
  }),
);
