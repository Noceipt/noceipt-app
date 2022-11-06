import Page from "../../templates/Page";
import styles from "../../styles/Dashboard.module.scss";
import Search from "../../components/Search";
import CeiptList from "../../components/CeiptList";

const Dashboard = () => {

	const receipts = [];

	const searchFilterCallback = (searchInput: string) => {
		// todo: filter receipts by text search
		// use provider for receipts
	}

	return (
		<Page>
			<h1 className={styles.Dashboard}>Dashboard</h1>
			<Search callback={searchFilterCallback}/>
			<CeiptList receiptList={receipts}/>
		</Page>
	);
};

export default Dashboard;
