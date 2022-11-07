import styles from "./ReceiptComponent.module.scss";
import { IReceipt } from "../../types/ReceiptModel";
import { Box, Divider, Grid, GridItem, Heading } from "@chakra-ui/react";
import { FiTarget } from "react-icons/fi";
import { Fragment } from "react";

interface IReceiptComponentProps {
  classname?: string;
  receipt: IReceipt;
}

const ReceiptComponent = ({
  classname = "",
}: IReceiptComponentProps) => {
  const date = receipt!.orderTime ? new Date(receipt!.orderTime) : "";
  const formatedOrderDate = date
    ? [
        date.toLocaleString("default", { month: "long" }),
        date.getDay() + ",",
        date.getFullYear(),
        date.getHours() + ":" + date.getMinutes(),
      ].join(" ")
    : "";

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <Box className={styles.receiptContainer}>
      <Box
        className={styles.receiptHeader}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {/* TODO: change with img src */}
        {receipt.company?.logo && <FiTarget size={100} />}
        {receipt.company?.name && (
          <Heading as="h4" size="md">
            {receipt.company.name}
          </Heading>
        )}
        {receipt.company?.address}
      </Box>
      <Divider variant={"dashed"} borderColor={"white"} borderWidth={"2px"} />
      <Box
        className={styles.receiptTime}
        display={"flex"}
        justifyContent={"center"}
      >
        <Heading as="h4" size="sm">
          {formatedOrderDate}
        </Heading>
      </Box>
      <Box className={styles.receiptItems}>
        <Grid
          templateRows="repeat(1fr)"
          rowGap={3}
          templateColumns="repeat(5, 1fr)"
          gap={1}
        >
          <GridItem colSpan={1}>QTY</GridItem>
          <GridItem colSpan={3}>ITEM</GridItem>
          <GridItem textAlign={"end"} colSpan={1}>
            AMT
          </GridItem>
          <GridItem colSpan={5}>
            <Divider
              variant={"dashed"}
              borderColor={"white"}
              borderWidth={"2px"}
            />
          </GridItem>
          {receipt.items &&
            receipt.items.map((item) => {
              const keyPrefix = item.name!.replace(" ", "_");
              return (
                <Fragment key={keyPrefix}>
                  <GridItem colSpan={1}>{item.numOfItems}</GridItem>
                  <GridItem colSpan={3}>{item.name}</GridItem>
                  <GridItem textAlign={"end"} colSpan={1}>
                    {item.value}
                  </GridItem>
                </Fragment>
              );
            })}
        </Grid>
      </Box>
      <Box
        className={styles.receiptSubtotal}
        display={"flex"}
        justifyContent={"space-between"}
      >
        {receipt.subTotal && (
          <>
            <p>SubTotal</p>
            <p>{formatter.format(receipt.subTotal)}</p>
          </>
        )}
      </Box>
      <Box
        className={styles.receiptTax}
        display={"flex"}
        justifyContent={"space-between"}
      >
        {receipt.tax && (
          <>
            <p>Tax</p>
            <p>{formatter.format(receipt.tax)}</p>
          </>
        )}
      </Box>
      <Box
        className={styles.receiptTotal}
        display={"flex"}
        justifyContent={"space-between"}
      >
        {receipt.total && (
          <>
            <p>Total</p>
            <p>{formatter.format(receipt.total)}</p>
          </>
        )}
      </Box>
      <Divider variant={"dashed"} borderColor={"white"} borderWidth={"2px"} />
      <Box
        className={styles.receiptPaymentInfo}
        display={"flex"}
        justifyContent={"space-between"}
      >
        {receipt.paymentMethod?.cardType}
        {receipt.paymentMethod?.cardNumber && (
          <p>{"****************" + receipt.paymentMethod.cardNumber}</p>
        )}
      </Box>
      <Box className={styles.receiptMemo} display={"flex"}>
        {receipt.memos && receipt.memos.join(". ")}
      </Box>
    </Box>
  );
};
export default ReceiptComponent;
