import { BaseDocumentRequest, DocumentType } from "../Documents";

// account statement request body
/** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
export interface AccountStatementDocumentRequest extends BaseDocumentRequest {
  type: DocumentType.ACCOUNT_STATEMENT;
  year: number; // The year associated with the account statement.
  beginDate: string; // YYYY-MM-DD. The date representing the start of this period.
  endDate: string; // YYYY-MM-DD. The date representing the end of this period.
  accountNumber: string;
  summary: AccountStatementDocumentSummary;
  bank: AccountStatementDocumentBank;
  disclosure?: string; // disclosure text to place at the bottom of all account statement pages. Max length 1,000
}

/** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
export interface AccountStatementDocumentSummary {
  beginningBalance: number; // float
  endingBalance: number; // float
  interestPercentage: number; // float
  interestAmount: number; // float
  totalFees: number; // float
}

/** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
export interface AccountStatementDocumentBank {
  name: string;
  logo: string; // base64 encoded logo
  address: string;
  address2?: string;
  city: string;
  state: string; // two-letter code
  zipcode: string;
  customerService?: AccountStatementBankCustomerService;
}

/** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
export interface AccountStatementBankCustomerService {
  phoneNumber: string;
  email: string;
  website: string;
  instructions?: string;
}
