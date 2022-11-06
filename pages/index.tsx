import { Box } from "@chakra-ui/react";

import Head from "next/head";
import Page from "../templates/Page";
import ReceiptComponent from "../components/ReceiptComponent";

export default function Home() {
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
				<ReceiptComponent />
			</Page>
		</>
	);
}
