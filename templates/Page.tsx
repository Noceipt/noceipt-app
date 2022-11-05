import { PropsWithChildren } from "react";
import Head from "next/head";
import styles from "../styles/PageTemplate.module.scss";

export interface IPageProps {
	children: PropsWithChildren;
	title?: string;
}

const Page = ({ children, title }: IPageProps) => {
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
					<header>Header bro</header>
					{children}
					<footer>Footer bro</footer>
				</>
			</div>
		</>
	);
};

export default Page;
