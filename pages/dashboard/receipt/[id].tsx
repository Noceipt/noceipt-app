import { IReceipt } from "../../../types/ReceiptModel";
import styles from "../../../styles/Receipt.module.scss";
import ReceiptComponent from "../../../components/ReceiptComponent";

const Receipt = (receipt: IReceipt) => {
	return <ReceiptComponent receipt={receipt} />;
};

export default Receipt;
