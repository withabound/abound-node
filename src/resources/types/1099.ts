import type { PayeeRequest } from "./payee.js";
import type { PayerRequest } from "./payer.js";

export type StateTaxInfo = {
  filingState: string;
  payeeStateId?: string;
  payerStateId?: string;
  stateTaxWithheld?: number;
};

export type StateTaxInfoWithStateIncome = StateTaxInfo & {
  stateIncome?: number;
};

// Response body
export type Form1099 = {
  id: string;
  createdAt: string;
  status: Form1099Status;
  payerUrl: string;
  payeeUrl: string;
  formFields: {
    isVoid: boolean;
    isCorrected: boolean;
  };
  correctedById?: string;
  correctedFromId?: string;
  voidedById?: string;
  voidedFromId?: string;
};

// Request body
export type Form1099Request = {
  filingYear: number;
  payer: PayerRequest;
  payee: PayeeRequest;
  userId?: string;
};

export type Form1099Status = "CREATED" | "FILED" | "ACCEPTED" | "REJECTED";
