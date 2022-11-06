import Page from "../../templates/Page";
import styles from "../../styles/Dashboard.module.scss";
import Search from "../../components/Search";

const Dashboard = () => {

	const searchFilterCallback = (searchInput: string) => {
		// todo: filter receipts by text search
		// use provider for receipts
	}

	return (
		<Page>
			<h1 className={styles.Dashboard}>Dashboard</h1>
			<Search callback={searchFilterCallback}/>
		</Page>
	);
};

export default Dashboard;
