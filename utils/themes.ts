import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const semanticTokens = {
  font: {
    size: {
      sm: "12px",
    },
  },
  colors: {
    green: {
      default: "rgb(192, 238, 164)",
      _dark: "rgb(122, 163, 97)",
    },
  },
};

const theme = extendTheme({
  config,
  semanticTokens,
});

export default theme;
