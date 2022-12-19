import { EmptyObject, Pagination } from "./base/AboundResource";
import { AboundBulkResponse, AboundResponse } from "./base/AboundResponse";
import { AboundDocumentScopedResource } from "./base/AboundDocumentScopedResource";

// request body
export interface MailingRequest {
  // Used for testing in sandbox. This will be ignored in all production requests.
  test_status?: "pending" | "done" | "error";
}

// query params
export interface MailingParameters extends Pagination {}

// response body
export interface Mailing {
  mailingId: Readonly<string>;
  to: Readonly<MailingAddress>;
  from: Readonly<MailingAddress>;
  status: Readonly<"created" | "pending" | "done" | "error">;
  createdTimestamp: Readonly<number>;
}

interface MailingAddress {
  name?: Readonly<string>;
  company?: Readonly<string>;
  address: Readonly<string>;
  address2?: Readonly<string>;
  city: Readonly<string>;
  state: Readonly<string>;
  zipcode: Readonly<string>;
  country?: Readonly<string>;
}

/**
 * See https://docs.withabound.com/reference/mailings
 */
export default class Mailings extends AboundDocumentScopedResource<
  MailingRequest,
  Mailing
> {
  path = "/mailings";

  public async list(
    userId: string,
    documentId: string,
    parameters?: MailingParameters
  ): Promise<AboundBulkResponse<Mailing>> {
    return super.listForDocument(userId, documentId, parameters);
  }

  public async create(
    userId: string,
    documentId: string,
    mailing?: MailingRequest
  ): Promise<AboundResponse<Mailing>> {
    return super.createForDocument(
      userId,
      documentId,
      mailing ? { mailing } : undefined
    );
  }

  public async retrieve(
    userId: string,
    documentId: string,
    mailingId: string
  ): Promise<AboundResponse<Mailing>> {
    return super.retrieveForDocument(userId, documentId, mailingId);
  }

  public async delete(
    userId: string,
    documentId: string,
    mailingId: string
  ): Promise<AboundResponse<EmptyObject>> {
    return super.deleteForDocument(userId, documentId, mailingId);
  }
}
