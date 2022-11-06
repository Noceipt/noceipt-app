import { createContext, PropsWithChildren, useContext, useState } from "react";
import { IReceipt } from "../types/ReceiptModel";

interface IReceiptContext {
	receipts?: IReceipt[];
	filteredReceipts?: IReceipt[];
	setReceipts?: (prevState: []) => void;
	filterReceiptsCallback?: (searchInput: string) => void;
}

const ReceiptContext = createContext<IReceiptContext>({
	receipts: [],
	filteredReceipts: [],
	setReceipts: () => {},
	filterReceiptsCallback: () => {},
});

export const ReceiptProvider = (props: PropsWithChildren<IReceiptContext>) => {
	const [receipts, setReceipts] = useState<IReceipt[]>([]);
	const [filteredReceipts, setFilteredReceipts] = useState<IReceipt[]>([]);

	const searchItems = (obj: Object, text: string) => {
		const entries = Object.entries(obj);
		return entries.some((entry) => {
			const val = entry[0] as string;
			return val.includes(text);
		});
	};

	const filterReceiptsCallback = (searchInput: string) => {
		if (!searchInput) {
			setFilteredReceipts(receipts);
		}
		
		const filtered = receipts.filter((receipt) => {
			const entries = Object.entries(receipt);
			entries.some((entry) => {
				if (
					entry[0] === 'company' ||
					entry[0] === 'paymentMethod' ||
					entry[0] === 'items' 
				) {
					return searchItems(entry[0], searchInput);
				}

				const val = entry[1] as string
				return val.includes(searchInput);
			});
		});

		setFilteredReceipts(filtered);
	};

	return (
		<ReceiptContext.Provider value={{ receipts, filteredReceipts, setReceipts, filterReceiptsCallback }}>
			{props.children}
		</ReceiptContext.Provider>
	);
};

export const useReceiptsContext = () => useContext(ReceiptContext);
