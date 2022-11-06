import { Box, Heading, useColorMode } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import Head from "next/head";
import Page from "../templates/Page";
import Search from "../components/Search";

export default function Home() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<>
			<Head>
				<title>Noceipt</title>
				<meta
					name="description"
					content="NEVER PRINT A RECEIPT AGAIN"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Page>
				<Box
					display="flex"
					height={"50vh"}
					flexDirection={"column"}
				></Box>
			</Page>
		</>
	);
}
