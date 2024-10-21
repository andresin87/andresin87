import plugin from "tailwindcss/plugin";

const sizingRange = [
  0, 1, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 56, 64, 80,
  96, 112, 128, 144, 160, 176, 192, 208, 224, 240, 256, 288, 320, 384, 400, 416,
  432, 448, 464, 480, 512, 544, 576, 608, 640, 672, 704, 736, 768, 800, 832,
  864,
];

function pxToRem(pxValue: number, htmlFontSize: number) {
  const remValue = pxValue / htmlFontSize;

  return `${remValue}rem`;
}

function getCSSVariableDeclarations(htmlFontSize: number) {
  return sizingRange.reduce((acc: any, size: number) => {
    acc[`--sz-${size}`] = pxToRem(size, htmlFontSize);

    return acc;
  }, {});
}

function getCSSVariableReferences() {
  return sizingRange.reduce((acc: any, sizeValue: number) => {
    acc[`sz-${sizeValue}`] = `var(--sz-${sizeValue})`;

    return acc;
  }, {});
}

export const sizings = plugin.withOptions(
  ({ htmlFontSize = 16 }: { htmlFontSize?: number } = {}) =>
    ({ addBase }) => {
      addBase({
        ":root": getCSSVariableDeclarations(htmlFontSize),
      });
    },
  () => ({
    theme: {
      extend: {
        width: getCSSVariableReferences(),
        maxWidth: getCSSVariableReferences(),
        minWidth: getCSSVariableReferences(),
        height: getCSSVariableReferences(),
        maxHeight: getCSSVariableReferences(),
        minHeight: getCSSVariableReferences(),
        translate: getCSSVariableReferences(),
        size: getCSSVariableReferences(),
      },
    },
  }),
);
