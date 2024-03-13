import type { AboundContext } from "../abound.js";
import {
  action,
  actionWithEmptyRequest,
  delete_,
  get,
  list,
  post,
} from "./base/base-resource.js";
import type { MailingRequest } from "./mailings.js";
import type {
  StateTaxInfo,
  Form1099,
  Form1099Request,
  Form1099Response,
  Form1099Status,
} from "./types/1099.js";
import type { Pagination } from "./types/pagination.js";
import type { PayeeRequest } from "./types/payee.js";

// Response body
export type Form1099K = Form1099 &
  Form1099Response & {
    formFields: Form1099KFormFields;
  };

// Request body
// eslint-disable-next-line @typescript-eslint/naming-convention
export type Form1099KRequest = Form1099Request & {
  formFields: Form1099KFormFields;
};

// Correct request body
// eslint-disable-next-line @typescript-eslint/naming-convention
export type CorrectForm1099KRequest = {
  payee: PayeeRequest;
  formFields: Form1099KFormFields;
};

// Query params
// eslint-disable-next-line @typescript-eslint/naming-convention
export type Form1099KParameters = Pagination & {
  filingYear?: number;
  payeeTinFingerprint?: string;
  payerTinFingerprint?: string;
  status?: Form1099Status;
  userId?: string;
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export type Form1099KFormFields = {
  payerClassification: "PSE" | "EPF_OTHER";
  transactionsReportedClassification: "PAYMENT_CARD" | "THIRD_PARTY_NETWORK";
  pseName?: string;
  psePhoneNumber?: string;
  accountNumber?: string;
  aggregateGrossAmount: number;
  aggregateGrossAmountCardNotPresent?: number;
  merchantCategoryCode?: string;
  numberOfPaymentTransactions: number;
  federalIncomeTaxWithheld?: number;
  grossAmountsByMonth: {
    january?: number;
    february?: number;
    march?: number;
    april?: number;
    may?: number;
    june?: number;
    july?: number;
    august?: number;
    september?: number;
    october?: number;
    november?: number;
    december?: number;
  };
  stateTaxInfo: StateTaxInfo[];
};

const resource = "documents/1099-k";

// eslint-disable-next-line @typescript-eslint/naming-convention
export function form1099KResource(context: AboundContext) {
  return {
    create: post<Form1099K, Form1099KRequest>(resource, context),
    list: list<Form1099K, Form1099KParameters>(resource, context),
    mail: action<Form1099K, MailingRequest>(resource, context, "mail"),
    file: actionWithEmptyRequest<Form1099K>(resource, context, "file"),
    correct: action<Form1099K, CorrectForm1099KRequest>(
      resource,
      context,
      "correct"
    ),
    void: actionWithEmptyRequest<Form1099K>(resource, context, "void"),
    retrieve: get<Form1099K>(resource, context),
    delete: delete_(resource, context),
  };
}
