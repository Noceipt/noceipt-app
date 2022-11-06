import Page from "../../templates/Page";
import Search from "../../components/Search";
import CeiptList from "../../components/CeiptList";
import { useReceiptsContext } from "../../providers/ReceiptsProvider";
import { useEffect, useState } from "react";
import { useAuthenticationContext } from "../../providers/AuthenticationProvider";
import { getReceipts } from "../../utils/lib/receipts";

const Dashboard = () => {
  const { receipts, filteredReceipts, setReceipts } = useReceiptsContext();
  const { isLoggedIn } = useAuthenticationContext();
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    console.log(isLoggedIn)
    if (isLoggedIn.length > 0) {
      getReceipts(isLoggedIn).then((data: any) => {
        console.log(data.data)
        setReceipts!(data.data)});
    } else {
      console.log("nope")
    }
  }, [isLoggedIn, setReceipts]);

  return (
    <Page>
      <Search isActive={isActive} setIsActive={setIsActive} />
      {isLoggedIn && (
        <CeiptList
          receiptList={isActive ? filteredReceipts || [] : receipts || []}
        />
      )}
    </Page>
  );
};

export default Dashboard;
