import { globals } from "./globals";
import { colors } from "./colors";
import { sizings } from "./sizings";
import { screens } from "./screens";
import { typography } from "./typography";

export const brandConfig = ({
  htmlFontSize,
  color,
}: {
  htmlFontSize: number;
  color: string;
}) => {
  return [
    globals({}),
    // sizings({ htmlFontSize }),
    colors({ color }),
    typography({}),
    screens({}),
  ];
};
