//import styles from './CeiptListItem.module.scss';
import { Box, Flex, Heading, Square, Text } from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode } from "react";

interface ICeiptListItemProps {
  classname?: string;
  children?: ReactNode;
}

const CeiptListItem = ({ classname = "", children }: ICeiptListItemProps) => {
  return (
    <Flex>
      <Square size="100px" border="1px solid black" bg='blue'>Icon</Square>
      <Flex direction="column">
        <Heading as="h6">Heading</Heading>
        <Text>Subtitle</Text>
      </Flex>
      <Flex direction="column">
        <Heading as="h6">Price</Heading>
        <Text>SubPrice</Text>
      </Flex>
    </Flex>
  );
};
export default CeiptListItem;
