import { createContext, PropsWithChildren, useContext, useState } from "react";
import { IReceipt } from "../types/ReceiptModel";

interface IReceiptContext {
	receipts?: IReceipt[];
	setReceipts?: (prevState: []) => void;
}

const ReceiptContext = createContext<IReceiptContext>({
	receipts: [],
	setReceipts: () => {},
});

export const ReceiptProvider = (props: PropsWithChildren<IReceiptContext>) => {
	const [receipts, setReceipts] = useState<[]>([]);

	return (
		<ReceiptContext.Provider value={{ receipts, setReceipts }}>
			{props.children}
		</ReceiptContext.Provider>
	);
};

export const useReceiptsContext = () => useContext(ReceiptContext);
