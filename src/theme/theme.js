import { extendTheme } from "@chakra-ui/react";
import darkTheme from "./darkTheme";

const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, ...darkTheme });

export default theme;
