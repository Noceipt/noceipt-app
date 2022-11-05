// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.scss";

// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { AuthenticationProvider } from "../providers/AuthenticationProvider";
import { ReceiptProvider } from "../providers/ReceiptsProvider";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthenticationProvider>
      <ReceiptProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
      <ReceiptProvider />
    </AuthenticationProvider>
  );
}

export default MyApp;
