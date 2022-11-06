import Page from "../../templates/Page";
import Search from "../../components/Search";
import CeiptList from "../../components/CeiptList";
import { useReceiptsContext } from "../../providers/ReceiptsProvider";
import { useState } from "react";

const Dashboard = () => {
  const { receipts, filteredReceipts } = useReceiptsContext();
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <Page>
      <Search isActive={isActive} setIsActive={setIsActive} />
      <CeiptList
        receiptList={isActive ? filteredReceipts || [] : receipts || []}
      />
    </Page>
  );
};

export default Dashboard;
