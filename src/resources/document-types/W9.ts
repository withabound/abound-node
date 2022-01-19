import { BaseDocumentRequest, DocumentType } from "../Documents";

// request body
export interface W9DocumentRequest extends BaseDocumentRequest {
  type: DocumentType.W9;
  payerId?: string; // The payer filing or issuing this form.
  year: number;
  taxClassification: W9TaxClassification;
  accountNumbers?: string[];
  /**
   * The certification timestamp (number of milliseconds elapsed since the UNIX epoch)
   * for this W-9.
   */
  certificationTimestamp: number;
}

export enum W9TaxClassification {
  SOLE_PROPRIETOR = "soleProprietor",
}
