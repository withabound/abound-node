import {
  BaseDocumentRequest,
  BaseDocumentResponse,
  DocumentType,
} from "../Documents";

// account statement request body
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

export interface AccountStatementDocumentSummary {
  beginningBalance: number; // float
  endingBalance: number; // float
  interestPercentage: number; // float
  interestAmount: number; // float
  totalFees: number; // float
}

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

export interface AccountStatementBankCustomerService {
  phoneNumber: string;
  email: string;
  website: string;
  instructions?: string;
}

// account statement response body
export interface AccountStatementDocument extends BaseDocumentResponse {
  documentURL: Readonly<string | null>;
  documentName: Readonly<string>;
  type: Readonly<DocumentType>;
  year: string;
  creationDate: Readonly<string>; // YYYY-MM-DD
  createdTimestamp: Readonly<number>;
}
