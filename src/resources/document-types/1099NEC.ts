import { BaseDocumentRequest, DocumentType } from "../Documents";
import { StateTaxInfoWithIncome } from "./StateTaxInfo";

// request body
export interface Ten99NECDocumentRequest
  extends BaseDocumentRequest,
    Ten99NECFormFields {
  type: DocumentType.TEN99NEC;
  payerId: string;
  year: number;
}

export interface Ten99NECFormFields {
  /**
   * If `true`, the corrected checkbox will be marked on the document.
   */
  isCorrected?: boolean;

  /**
   * If the payer assigns the contractor a unique number for its records, enter the account number in
   * this field. If not, leave the field blank.
   */
  accountNumber?: string;

  /**
   * The total amount remitted by payer to recipient during the year.
   */
  nonemployeeCompensation: number;

  /**
   * If true, consumer products totaling $5,000 or more were sold to recipient for resale, on a buy-sell,
   * a deposit-commission, or other basis.
   */
  hasDirectSalesOver5000?: boolean;

  /**
   * The federal income tax withheld. A payer must backup withhold on certain payments if recipient did
   * not provide a TIN to the payer.
   */
  federalIncomeTaxWithheld?: number;

  /**
   * Up to two (2) state tax information objects.
   */
  stateTaxInfo: StateTaxInfoWithIncome[];
}
