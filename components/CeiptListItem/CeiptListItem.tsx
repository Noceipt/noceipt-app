//import styles from './CeiptListItem.module.scss';
import { Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode } from "react";

interface ICeiptListItemProps {
  classname?: string;
  children?: ReactNode;
}

const CeiptListItem = ({ classname = "", children }: ICeiptListItemProps) => {
  return (
    <Flex w={{ md: "50vw", base: "100vw" }}>
      <Image
        src=""
        width={40}
        height={40}
        alt="icon"
      />
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
          <Heading fontSize="listItem" textAlign="right" as="h6" paddingBottom="4px">
            $1,000
          </Heading>
          <Text fontSize="subtext" textAlign="right" color="subtext">
            1 Item
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default CeiptListItem;
