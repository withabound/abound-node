import { BaseDocumentRequest, DocumentType } from "../Documents";
import { StateTaxInfo } from "./StateTaxInfo";

// request body
export interface Ten99KDocumentRequest extends BaseDocumentRequest {
  type: DocumentType.TEN99K;
  payerId: string;
  year: number;

  /**
   * The type of payer. Payment settlement entity (PSE) or Electronic Payment Facilitator (EPF)/Other
   * third party.
   */
  payerClassification: PayerClassification;

  /**
   * The type of transactions reported.
   */
  transactionsReportedClassification: TransactionsReportedClassification;

  /**
   * The payment settlement entity name. Required if `payerClassification` is
   * PayerClassification.PAYMENT_SETTLEMENT_ENTITY.
   */
  pseName?: string;

  /**
   * The payment settlement entity phone number. Required if `payerClassification` is
   * PayerClassification.PAYMENT_SETTLEMENT_ENTITY.
   */
  psePhoneNumber?: string;

  /**
   * The account number or other unique number the PSE assigned to distinguish a account.
   */
  accountNumber?: string;

  /**
   * Aggregate gross amount of payment card/third party network transactions made to you through the PSE
   * during the calendar year.
   */
  aggregateGrossAmount?: number; // float

  /**
   * The aggregate gross amount of all reportable payment transactions made to you through the PSE during the
   * calendar year where the card was not present at the time of the transaction or the card number was keyed
   * into the terminal. Typically, this relates to online sales, phone sales, or catalogue sales. If
   * transactionsReportedClassification is TransactionsReportedClassification.THIRD_PARTY_NETWORK, or if
   * these are third party network transactions, card not present transactions will not be reported.
   */
  aggregateGrossAmountCardNotPresent?: number; // float

  /**
   * Payment brands use merchant category codes (MCCs) to classify merchants and businesses by the type of
   * goods or services provided. It is a four (4) digit code.
   */
  merchantCategoryCode?: string;

  /**
   * The number of payment transactions (not including refund transactions) processed through the payment
   * card/third party network.
   */
  numberOfPaymentTransactions: number;

  /**
   * The federal income tax withheld. Generally, a payer must backup withhold if you did not furnish your
   * TIN or you did not furnish the correct TIN to the payer.
   */
  federalIncomeTaxWithheld?: number; // float

  /**
   * An object that contains the gross amount of transactions for each month.
   */
  grossAmountsByMonth: GrossAmountsByMonth;

  /**
   * Up to two (2) state tax information objects.
   */
  stateTaxInfo?: StateTaxInfo[];
}

export enum PayerClassification {
  PAYMENT_SETTLEMENT_ENTITY = "pse",
  ELECTRONIC_PAYMENT_FACILITATOR_OR_OTHER_THIRD_PARTY = "epfOther",
}

export enum TransactionsReportedClassification {
  PAYMENT_CARD = "paymentCard",
  THIRD_PARTY_NETWORK = "thirdPartyNetwork",
}

export interface GrossAmountsByMonth {
  january?: number; // float
  february?: number; // float
  march?: number; // float
  april?: number; // float
  may?: number; // float
  june?: number; // float
  july?: number; // float
  august?: number; // float
  september?: number; // float
  october?: number; // float
  november?: number; // float
  december?: number; // float
}
