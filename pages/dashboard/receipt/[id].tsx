import { IReceipt } from "../../../types/ReceiptModel";
import styles from "../../styles/Receipt.module.scss";

const Receipt = (receipt: IReceipt) => {
	return <h1 className={styles.Receipt}>{receipt.companyName}</h1>;
};

export default Receipt;
