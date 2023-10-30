import type { AboundContext } from "../abound.js";
import {
  post,
  delete_,
  list,
  get,
  action,
  actionWithEmptyRequest,
} from "./base/base-resource.js";
import type { MailingRequest } from "./mailings2.js";
import type {
  StateTaxInfo,
  Form1099,
  Form1099Request,
  Form1099Status,
} from "./types/1099.js";
import type { Pagination } from "./types/pagination.js";
import type { PayeeRequest } from "./types/payee.js";

// Response body
export type Form1099Int = Form1099 & Form1099IntRequest;

// Request body
export type Form1099IntRequest = Form1099Request & {
  formFields: Form1099IntFormFields;
};

// Correct request body
export type CorrectForm1099IntRequest = {
  payee: PayeeRequest;
  formFields: Form1099IntFormFields;
};

// Query params
export type Form1099IntParameters = Pagination & {
  filingYear?: number;
  payeeTinFingerprint?: string;
  payerTinFingerprint?: string;
  status?: Form1099Status;
  userId?: string;
};

export type Form1099IntFormFields = {
  hasFatcaFilingRequirement?: boolean;
  accountNumber?: string;
  payersRoutingNumber?: string;
  interestIncome?: number;
  earlyWithdrawalPenalty?: number;
  usSavingsBondsInterest?: number;
  federalIncomeTaxWithheld?: number;
  investmentExpenses?: number;
  foreignTaxPaid?: number;
  foreignTaxPaidCountry?: string;
  taxExemptInterest?: number;
  specifiedPrivateActivityBondInterest?: number;
  marketDiscount?: number;
  bondPremium?: number;
  bondPremiumTreasury?: number;
  bondPremiumTaxExemptBond?: number;
  stateTaxInfo: StateTaxInfo[];
};

const resource = "documents/1099-int";

export function form1099IntResource(context: AboundContext) {
  return {
    create: post<Form1099Int, Form1099IntRequest>(resource, context),
    list: list<Form1099Int, Form1099IntParameters>(resource, context),
    mail: action<Form1099Int, MailingRequest>(resource, context, "mail"),
    file: actionWithEmptyRequest<Form1099Int>(resource, context, "file"),
    correct: action<Form1099Int, CorrectForm1099IntRequest>(
      resource,
      context,
      "correct"
    ),
    void: actionWithEmptyRequest<Form1099Int>(resource, context, "void"),
    retrieve: get<Form1099Int>(resource, context),
    delete: delete_(resource, context),
  };
}
