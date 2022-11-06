import "../styles/globals.scss";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../utils/themes";
import SidenavProvider from "../providers/SidenavProvider";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<SidenavProvider>
				<Component {...pageProps} />
			</SidenavProvider>
		</ChakraProvider>
	);
}

export default MyApp;
