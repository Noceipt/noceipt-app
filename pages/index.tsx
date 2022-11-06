import Head from "next/head";
import Page from "../templates/Page";
import LoginComponent from "../components/LoginComponent";

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
				<LoginComponent />
			</Page>
		</>
	);
}
