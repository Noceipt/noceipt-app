//import styles from './CeiptListItem.module.scss';
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode } from "react";

interface ICeiptListItemProps {
  classname?: string;
  children?: ReactNode;
}

const CeiptListItem = ({ classname = "", children }: ICeiptListItemProps) => {
  return (
    <Flex>
      <Box h='100px' bg='blue' />
      <Flex>
        <Heading as="h4">Heading</Heading>
        <Text>Subtitle</Text>
      </Flex>
      <Flex>
        <Heading as="h4">Price</Heading>
        <Text>SubPrice</Text>
      </Flex>
    </Flex>
  );
};
export default CeiptListItem;
