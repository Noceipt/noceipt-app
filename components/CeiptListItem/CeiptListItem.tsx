import { Flex, Heading, SlideFade, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ICeiptListItemProps {
  wait: number;
}

const CeiptListItem = ({ wait }: ICeiptListItemProps) => {
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
        <Image src="" width={40} height={40} alt="icon" />
        <Flex justifyContent="space-between" paddingLeft="4px" flexGrow="1">
          <Flex direction="column" justifyContent="center">
            <Heading fontSize="listItem" as="h6" paddingBottom="4px">
              Target
            </Heading>
            <Text fontSize="subtext" color="subtext">
              November 9th, 2022
            </Text>
          </Flex>
          <Flex direction="column" justifyContent="center">
            <Heading
              fontSize="listItem"
              textAlign="right"
              as="h6"
              paddingBottom="4px"
            >
              $1,000
            </Heading>
            <Text fontSize="subtext" textAlign="right" color="subtext">
              1 Item
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </SlideFade>
  );
};
export default CeiptListItem;
