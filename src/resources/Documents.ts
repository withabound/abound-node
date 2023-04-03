import { Pagination } from "./base/AboundResource";
import { AboundBulkResponse, AboundResponse } from "./base/AboundResponse";
import { AboundUserScopedResource } from "./base/AboundUserScopedResource";
import {
  Ten99INTDocumentRequest,
  Ten99INTFormFields,
} from "./document-types/1099INT";
import {
  Ten99KDocumentRequest,
  Ten99KFormFields,
} from "./document-types/1099K";
// import { Ten99MISCDocumentRequest } from "./document-types/1099MISC";
import {
  Ten99NECDocumentRequest,
  Ten99NECFormFields,
} from "./document-types/1099NEC";
import { AccountStatementDocumentRequest } from "./document-types/AccountStatement";
import { W9DocumentRequest } from "./document-types/W9";

export {
  StateTaxInfo,
  StateTaxInfoWithIncome,
} from "./document-types/StateTaxInfo";

export type DocumentRequest =
  | AccountStatementDocumentRequest
  | Ten99INTDocumentRequest
  | Ten99KDocumentRequest
  // | Ten99MISCDocumentRequest
  | Ten99NECDocumentRequest
  | W9DocumentRequest;

export interface BaseDocumentRequest {
  type: DocumentType;
}

// query params
export interface DocumentParameters extends Pagination {
  year?: string | number; // applies a filter based on year
}

export interface Document {
  readonly documentId: string | null;
  readonly documentURL: string | null;
  readonly documentName: string;
  readonly type: DocumentType;
  readonly year: string;
  readonly status?: string;
  readonly message?: string;
  readonly createdTimestamp: number;
}

interface BaseTen99Document {
  readonly year: string;
  readonly documentId: string;
  readonly documentURL: string;
  readonly documentName: string;
  readonly creationDate?: string;
  readonly createdTimestamp: number;
  readonly status?: string;
  readonly message?: string;
}

export interface Ten99INTDocument extends BaseTen99Document {
  readonly type: DocumentType.TEN99INT;
  readonly formData: Readonly<Payer> &
    Readonly<User> &
    Readonly<Ten99INTFormFields>;
}

export interface Ten99KDocument extends BaseTen99Document {
  readonly type: DocumentType.TEN99K;
  readonly formData: Readonly<Payer> &
    Readonly<User> &
    Readonly<Ten99KFormFields>;
}

export interface Ten99NECDocument extends BaseTen99Document {
  readonly type: DocumentType.TEN99NEC;
  readonly formData: Readonly<Payer> &
    Readonly<User> &
    Readonly<Ten99NECFormFields>;
}

interface User {
  readonly user: Readonly<{
    name: string;
    address: string;
    address2?: string;
    city: string;
    state: string;
    zipcode: string;
    country?: string;
  }>;
}

interface Payer {
  readonly payer: Readonly<{
    name: string;
    address: string;
    address2?: string;
    city: string;
    state: string;
    zipcode: string;
    country: string;
    phoneNumber: string;
  }>;
}

export enum DocumentType {
  /** @deprecated Our v2 API is now deprecated and will become completely unavailable on Tuesday May 16, 2023. Please consider upgrading to our v3 API as a way to prepare for the sunsetting of v2. For more detail on these product changes, what endpoints are changing in v3 and how that may affect your company, please view our [API Changelog](https://docs.withabound.com/changelog). */
  ACCOUNT_STATEMENT = "accountStatement",
  TEN99INT = "1099int",
  TEN99K = "1099k",
  // TEN99MISC = "1099misc",
  TEN99NEC = "1099nec",
  W9 = "w9",
}

// The raw `Document` object returned from the APIs returns one deprecated field, which the SDK will remove.
interface DocumentApiResponse extends Document {
  readonly creationDate: string; // YYYY-MM-DD
}

export type DocumentResponse =
  | Document
  | Ten99INTDocument
  | Ten99KDocument
  | Ten99NECDocument;

/**
 * See https://docs.withabound.com/reference/documents
 */
export default class Documents extends AboundUserScopedResource<
  DocumentRequest,
  DocumentResponse,
  DocumentApiResponse
> {
  path = "/documents";

  getDeprecatedFields(): Array<keyof DocumentApiResponse> {
    return ["creationDate"];
  }

  public async create(
    userId: string,
    documents: DocumentRequest[]
  ): Promise<AboundBulkResponse<DocumentResponse>> {
    return super.bulkCreateForUser(userId, { documents });
  }

  public async list(
    userId: string,
    parameters?: DocumentParameters
  ): Promise<AboundBulkResponse<DocumentResponse>> {
    return super.listForUser(userId, parameters);
  }

  public async retrieve(
    userId: string,
    documentId: string
  ): Promise<AboundResponse<DocumentResponse>> {
    return super.retrieveForUser(userId, documentId);
  }
}
