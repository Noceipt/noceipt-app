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
	notes?: string[];
	_id: string;
}

export interface ICompanyData {
	name?: string;
	logo?: string;
	address?: string;
	website?: string;
}

export interface IPaymentData {
	cardNumber?: string;
	cardType?: 'VISA' | 'MASTERCARD' | 'AMEX' | 'DISCOVER';
	authNumber?: string;
}

export interface ILineItem {
	numOfItems?: number;
	name?: string;
	value?: number;
	_id: string;
}