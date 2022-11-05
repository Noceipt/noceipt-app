import "../styles/globals.scss";
import { AppProps } from "next/app";
import { AuthenticationProvider } from "../providers/AuthenticationProvider";
import { ReceiptProvider } from "../providers/ReceiptsProvider";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../utils/themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
