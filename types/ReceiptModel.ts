export interface Receipt {
    companyName?: string;
    companyLogo?: string;
    companyAddress?: string;
    companyWebsite?: string;
    orderedTime?: string;
    transactionType?: string;
    paymentMethod?: Object;
    items?: Object[];
    subTotal?: number;
    tax?: number;
    total?: number;
    memos?: string[];
}