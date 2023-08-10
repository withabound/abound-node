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
import { W9DocumentRequest, W9FormFields } from "./document-types/W9";

export {
  StateTaxInfo,
  StateTaxInfoWithIncome,
} from "./document-types/StateTaxInfo";

export type DocumentRequest =
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

interface BaseDocument {
  readonly year: string;
  readonly documentId: string;
  readonly documentURL: string;
  readonly documentName: string;
  readonly creationDate?: string;
  readonly createdTimestamp: number;
}

interface BaseTen99Document extends BaseDocument {
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

export interface W9Document extends BaseDocument {
  readonly type: DocumentType.W9;
  readonly formData: Readonly<W9Payer> &
    Readonly<W9User> &
    Readonly<W9FormFields>;
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

interface W9User {
  readonly user: Readonly<{
    name: string;
    businessName?: string;
    address: string;
    address2?: string;
    city: string;
    state: string;
    zipcode: string;
    country?: string;
  }>;
}

interface W9Payer {
  readonly payer?: Readonly<{
    name: string;
    address: string;
    address2?: string;
    city: string;
    state: string;
    zipcode: string;
  }>;
}

export enum DocumentType {
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
  | Ten99NECDocument
  | W9Document;

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
