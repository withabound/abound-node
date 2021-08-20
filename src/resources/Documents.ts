import { Pagination } from "./base/AboundResource";
import { AboundBulkResponse, AboundResponse } from "./base/AboundResponse";
import { AboundUserScopedResource } from "./base/AboundUserScopedResource";

// request body
export interface DocumentRequest {
  type: DocumentType;
  year: number; // The year associated with the document.
  beginDate: string; // YYYY-MM-DD. The date representing the start of this period.
  endDate: string; // YYYY-MM-DD. The date representing the end of this period.
  accountNumber: string;
  summary: DocumentSummary;
  bank: DocumentBank;
  disclosure?: string; // disclosure text to place at the bottom of all account statement pages. Max length 1,000
}

export interface DocumentSummary {
  beginningBalance: number; // float
  endingBalance: number; // float
  interestPercentage: number; // float
  interestAmount: number; // float
  totalFees: number; // float
}

export interface DocumentBank {
  name: string;
  logo: string; // base64 encoded logo
  address: string;
  address2?: string;
  city: string;
  state: string; // two-letter code
  zipcode: string;
  customerService?: BankCustomerService;
}

export interface BankCustomerService {
  phoneNumber: string;
  email: string;
  website: string;
  instructions?: string;
}

// query params
export interface DocumentParameters extends Pagination {
  year?: string | number; // applies a filter based on year
}

// response body
export interface Document {
  documentId: Readonly<string>;
  documentURL: Readonly<string>;
  documentName: Readonly<string>;
  type: Readonly<DocumentType>;
  year: string;
  creationDate: Readonly<string>; // YYYY-MM-DD
  createdTimestamp: Readonly<number>;
}

export enum DocumentType {
  ACCOUNT_STATEMENT = "accountStatement",
}

/**
 * See https://docs.withabound.com/reference/documents
 */
export class Documents extends AboundUserScopedResource<
  DocumentRequest,
  Document
> {
  path = "/documents";

  public async create(
    userId: string,
    documents: DocumentRequest[]
  ): Promise<AboundBulkResponse<Document>> {
    return super.bulkCreateForUser(userId, { documents });
  }

  public async list(
    userId: string,
    parameters?: DocumentParameters
  ): Promise<AboundBulkResponse<Document>> {
    return super.listForUser(userId, parameters);
  }

  public async retrieve(
    userId: string,
    documentId: string
  ): Promise<AboundResponse<Document>> {
    return super.retrieveForUser(userId, documentId);
  }
}
