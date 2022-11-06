import { Divider, Flex } from "@chakra-ui/react";
import { ILineItem, IReceipt } from "../../types/ReceiptModel";
import CeiptListItem from "../CeiptListItem";

interface ICeiptListProps {
  receiptList: IReceipt[]
}

const resolveTotalNumberOfItems = (items: ILineItem[] = []) =>
  items.reduce((acc, curr) => {
    if (curr) {
      return (curr.numOfItems as number) + acc;
    }
    return acc;
  }, 0);

const CeiptList = ({ receiptList }: ICeiptListProps) => {
  return (
    <Flex direction="column">
      {receiptList.map(({ _id, company, orderedTime, items, total }, index) => {
        return (
          <>
            {index > 0 && <Divider />}
            <CeiptListItem
              companyLogo={company?.logo as string}
              companyName={company?.name as string}
              orderedTime={orderedTime}
              calculatedNumberOfItems={resolveTotalNumberOfItems(items)}
              total={total}
              wait={index}
              key={_id + index}
            />
          </>
        );
      })}
    </Flex>
  );
};
export default CeiptList;
