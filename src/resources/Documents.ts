import { Pagination } from "./base/AboundResource";
import { AboundBulkResponse, AboundResponse } from "./base/AboundResponse";
import { AboundUserScopedResource } from "./base/AboundUserScopedResource";
import { AccountStatementDocumentRequest } from "./document-types/AccountStatement";

export type DocumentRequest = AccountStatementDocumentRequest; // | ScheduleCDocumentRequest, etc.

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
  year: string;
  createdTimestamp: Readonly<number>;
}

export enum DocumentType {
  ACCOUNT_STATEMENT = "accountStatement",
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
