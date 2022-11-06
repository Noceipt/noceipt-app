import Page from "../../templates/Page";
import Search from "../../components/Search";
import CeiptList from "../../components/CeiptList";

const Dashboard = () => {

	return (
		<Page>
			<Search/>
			<CeiptList />
		</Page>
	);
};

export default Dashboard;
