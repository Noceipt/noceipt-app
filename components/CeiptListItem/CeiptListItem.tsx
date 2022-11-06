import { Flex, Heading, SlideFade, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { ICompanyData, ILineItem, IReceipt } from "../../types/ReceiptModel";

interface ICeiptListItemProps {
  wait: number;
  companyLogo: ICompanyData["companyLogo"];
  companyName: ICompanyData["companyName"];
  calculatedNumberOfItems: number;
  total: IReceipt["total"];
  orderedTime: IReceipt["orderedTime"];
}

const determineNumOfItems = (numOfItems: number = 0) => {
  if (numOfItems === 0 || numOfItems > 1) {
    return `${numOfItems} Items`;
  }
  return "1 Item";
};

const CeiptListItem = ({
  wait,
  companyLogo,
  companyName,
  calculatedNumberOfItems,
  total,
  orderedTime
}: ICeiptListItemProps) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen((current) => !current);
    }, wait * 200);

    return () => clearTimeout(timeout);
  }, [wait]);

  return (
    <SlideFade offsetY="16px" in={open}>
      <Flex w={{ md: "50vw", base: "100vw" }}>
        {companyLogo ? (
          <Image src={companyLogo} width={40} height={40} alt="icon" />
        ) : (
          <FiShoppingCart size={40} />
        )}
        <Flex justifyContent="space-between" paddingLeft="4px" flexGrow="1">
          <Flex direction="column" justifyContent="center">
            <Heading fontSize="listItem" as="h6" paddingBottom="4px">
              {companyName}
            </Heading>
            <Text fontSize="subtext" color="subtext">
              {orderedTime}
            </Text>
          </Flex>
          <Flex direction="column" justifyContent="center">
            <Heading
              fontSize="listItem"
              textAlign="right"
              as="h6"
              paddingBottom="4px"
            >
              {total}
            </Heading>
            <Text fontSize="subtext" textAlign="right" color="subtext">
              {determineNumOfItems(calculatedNumberOfItems)}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </SlideFade>
  );
};
export default CeiptListItem;
