export interface IReceipt {
	company?: ICompanyData;
	orderedTime?: string;
	transactionType?: 'SALE' | 'CONTACTLESS';
	paymentMethod?: IPaymentData;
	items?: ILineItem[];
	subTotal?: number;
	tax?: number;
	total?: number;
	memos?: string[];
}

export interface ICompanyData {
	companyName?: string;
	companyLogo?: string;
	companyAddress?: string;
	companyWebsite?: string;
}

export interface IPaymentData {
	cardNumber?: string;
	cardType?: 'VISA' | 'MASTERCARD' | 'AMEX' | 'DISCOVER';
	authorizationNumber?: string;
}

export interface ILineItem {
	numberOfItems?: number;
	itemName?: string;
	itemValue?: string;
}