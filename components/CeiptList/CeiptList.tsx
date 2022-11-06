import { Divider, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import CeiptListItem from "../CeiptListItem";

interface ICeiptListProps {
  classname?: string;
  children?: ReactNode;
}
const CeiptList = ({ classname = "", children }: ICeiptListProps) => {
  return (
    <Flex direction="column">
      {[1, 2, 3, 4, 5].map((elem, index) => {
        if (index > 0) {
          return (
            <>
              <Divider />
              <CeiptListItem wait={index} key={elem} />
            </>
          );
        }
        return <CeiptListItem wait={index} key={elem} />;
      })}
    </Flex>
  );
};
export default CeiptList;
