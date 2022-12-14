import "../styles/globals.scss";
import { AppProps } from "next/app";
import { AuthenticationProvider } from "../providers/AuthenticationProvider";
import { ReceiptProvider } from "../providers/ReceiptsProvider";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../utils/themes";
import SidenavProvider from "../providers/SidenavProvider";
import UserProvider from "../providers/UserProvider";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<AuthenticationProvider>
				<UserProvider>
					<ReceiptProvider>
						<SidenavProvider>
							<Component {...pageProps} />
						</SidenavProvider>
					</ReceiptProvider>
				</UserProvider>
			</AuthenticationProvider>
		</ChakraProvider>
	);
}

export default MyApp;
