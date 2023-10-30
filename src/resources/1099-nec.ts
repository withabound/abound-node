import type { AboundContext } from "../abound.js";
import {
  action,
  actionWithEmptyRequest,
  delete_,
  get,
  list,
  post,
} from "./base/base-resource.js";
import type { MailingRequest } from "./mailings2.js";
import type {
  StateTaxInfoWithStateIncome,
  Form1099,
  Form1099Request,
  Form1099Status,
} from "./types/1099.js";
import type { Pagination } from "./types/pagination.js";
import type { PayeeRequest } from "./types/payee.js";

// Response body
export type Form1099Nec = Form1099 & Form1099NecRequest;

// Response body
export type Form1099NecRequest = Form1099Request & {
  formFields: Form1099NecFormFields;
};

// Correct request body
export type CorrectForm1099NecRequest = {
  payee: PayeeRequest;
  formFields: Form1099NecFormFields;
};

// Query params
export type Form1099NecParameters = Pagination & {
  filingYear?: number;
  payeeTinFingerprint?: string;
  payerTinFingerprint?: string;
  status?: Form1099Status;
  userId?: string;
};

export type Form1099NecFormFields = {
  accountNumber?: string;
  nonemployeeCompensation: number;
  hasDirectSalesOver5000?: boolean;
  federalIncomeTaxWithheld?: number;
  stateTaxInfo: StateTaxInfoWithStateIncome[];
};

const resource = "documents/1099-nec";

export function form1099NecResource(context: AboundContext) {
  return {
    create: post<Form1099Nec, Form1099NecRequest>(resource, context),
    list: list<Form1099Nec, Form1099NecParameters>(resource, context),
    mail: action<Form1099Nec, MailingRequest>(resource, context, "mail"),
    file: actionWithEmptyRequest<Form1099Nec>(resource, context, "file"),
    correct: action<Form1099Nec, CorrectForm1099NecRequest>(
      resource,
      context,
      "correct"
    ),
    void: actionWithEmptyRequest<Form1099Nec>(resource, context, "void"),
    retrieve: get<Form1099Nec>(resource, context),
    delete: delete_(resource, context),
  };
}
