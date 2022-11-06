import { ReactNode } from "react";
import Head from "next/head";
import styles from "../styles/PageTemplate.module.scss";
import Navbar from "../components/Navbar";
import { Box, useColorModeValue } from "@chakra-ui/react";

export interface IPageProps {
	children: ReactNode;
	title?: string;
}

const Page = ({ children, title }: IPageProps) => {
	const bgColor = useColorModeValue("white", "#111111");
	return (
		<>
			<Head>
				<title>{title || "Noceipt » Ditch the receipts"}</title>
				<meta
					property="og:title"
					content={title || "Noceipt » Ditch the receipts"}
					key="title"
				/>
			</Head>
			<div className={styles.PageTemplate}>
				<>
					<Navbar />
					<Box
						padding={4}
						borderTopLeftRadius={32}
						borderTopRightRadius={32}
						marginTop={-8}
						bgColor={bgColor}
						as="main"
						justifyContent="flex-start"
					>
						{children}
					</Box>
					<footer>Footer bro</footer>
				</>
			</div>
		</>
	);
};

export default Page;
