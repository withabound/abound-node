import type { AboundContext } from "../abound.js";
import { delete_, get, list, put } from "./base/base-resource.js";
import type { Pagination } from "./types/pagination.js";

// Response body
export type Mailing = {
  id: string;
  createdAt: string;
  status: MailingStatus;
  url: string;
  userId?: string;
  mailedFromId?: string;
} & MailingRequest;

// Request body
export type MailingRequest = {
  to: MailingAddress;
  from: MailingAddress;
};

// Query params
export type MailingParameters = Pagination & {
  status?: MailingStatus;
  userId?: string;
};

export type MailingAddress = {
  name: string;
  name2?: string;
  address: string;
  address2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

export type MailingStatus =
  | "CREATED"
  | "PROCESSED_FOR_DELIVERY"
  | "IN_TRANSIT"
  | "DELIVERED"
  | "RETURNED_TO_SENDER";

const resource = "mailings";

export function mailingsResource(context: AboundContext) {
  return {
    list: list<Mailing, MailingParameters>(resource, context),
    retrieve: get<Mailing>(resource, context),
    update: put<Mailing, MailingRequest>(resource, context),
    delete: delete_(resource, context),
  };
}
