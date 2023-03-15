import { Pagination } from "./base/AboundResource";
import { AboundBulkResponse, AboundResponse } from "./base/AboundResponse";
import { AboundUserScopedResource } from "./base/AboundUserScopedResource";
import { Ten99INTDocumentRequest } from "./document-types/1099INT";
import { Ten99KDocumentRequest } from "./document-types/1099K";
// import { Ten99MISCDocumentRequest } from "./document-types/1099MISC";
import { Ten99NECDocumentRequest } from "./document-types/1099NEC";
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
  documentId: Readonly<string | null>;
  documentURL: Readonly<string | null>;
  documentName: Readonly<string>;
  type: Readonly<DocumentType>;
  year: Readonly<string>;
  status?: Readonly<string>;
  message?: Readonly<string>;
  createdTimestamp: Readonly<number>;
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
  creationDate: Readonly<string>; // YYYY-MM-DD
}

/**
 * See https://docs.withabound.com/reference/documents
 */
export default class Documents extends AboundUserScopedResource<
  DocumentRequest,
  Document,
  DocumentApiResponse
> {
  path = "/documents";

  getDeprecatedFields(): Array<keyof DocumentApiResponse> {
    return ["creationDate"];
  }

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
