import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config : ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
}

const semanticTokens = {
  font: {
    size: {
      sm: "12px",
    },
  },
  colors: {
    green: {
      default: "#C0EEA4",
      _dark: "#7AA361",
    },
  },
};

const theme = extendTheme({ config, semanticTokens });

export default theme;
