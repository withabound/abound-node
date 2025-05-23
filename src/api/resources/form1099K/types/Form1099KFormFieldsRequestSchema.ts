/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Abound from "../../../index";

/**
 * The 1099-K form fields.
 */
export interface Form1099KFormFieldsRequestSchema {
    payerClassification: Abound.Form1099KPayerClassificationEnum;
    transactionsReportedClassification: Abound.Form1099KTransactionsReportedClassificationSchema;
    /** The payment settlement entity name. Required if `payerClassification` is `PSE`. */
    pseName?: string;
    /** The payment settlement entity phone number. Required if `payerClassification` is `PSE`. */
    psePhoneNumber?: string;
    accountNumber?: Abound.types.Form1099AccountNumber;
    /** Aggregate gross amount of payment card/third party network transactions made to you through the PSE during the calendar year. Value must be in cents. */
    aggregateGrossAmount: number;
    /** The aggregate gross amount of all reportable payment transactions made to you through the PSE during the calendar year where the card was not present at the time of the transaction or the card number was keyed into the terminal. Typically, this relates to online sales, phone sales, or catalogue sales. If `transactionsReportedClassification` is `thirdPartyNetwork`, or if these are third party network transactions, card not present transactions will not be reported. Value must be in cents. */
    aggregateGrossAmountCardNotPresent?: number;
    /** Payment brands use merchant category codes (MCCs) to classify merchants and businesses by the type of goods or services provided. It is a four (4) digit code. This may be left blank. */
    merchantCategoryCode?: string;
    /** The number of payment transactions (not including refund transactions) processed through the payment card/third party network. */
    numberOfPaymentTransactions: number;
    /** The federal income tax withheld. Generally, a payer must backup withhold if you did not furnish your TIN or you did not furnish the correct TIN to the payer. Value must be in cents. Abound does not currently support `federalIncomeTaxWithheld` reporting on the 1099-K, please contact us for more information. */
    federalIncomeTaxWithheld?: number;
    grossAmountsByMonth: Abound.Form1099KGrossAmountsByMonthSchema;
    /** An array that contains up to two state tax information objects. Abound currently only supports one state tax information object in this array. Abound does not currently support state-level tax withholding reporting on the 1099-K, please contact us for more information. */
    stateTaxInfo: Abound.types.Form1099StateTaxInfoSchema[];
}
