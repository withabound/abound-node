import { BaseDocumentRequest, DocumentType } from "../Documents";
import { StateTaxInfoWithIncome } from "./StateTaxInfo";

// request body
export interface Ten99MISCDocumentRequest extends BaseDocumentRequest {
  type: DocumentType.TEN99MISC;
  payerId: string;
  year: number;

  /**
   * Required if you have multiple accounts for a recipient for whom you are filing more than one Form
   * 1099-MISC. Required if `hasFatcaFilingRequirement` is true.
   */
  accountNumber?: string;

  /**
   * Satisfying a requirement to report with respect to a U.S. account for chapter 4 purposes.
   */
  hasFatcaFilingRequirement?: boolean;

  /**
   * Report rents from real estate on Schedule E (Form 1040). However, report rents on Schedule C
   * (Form 1040) if you provided significant services to the tenant, sold real estate as a business,
   * or rented personal property as a business.
   */
  rents?: number; // float

  /**
   * Report royalties from oil, gas, or mineral properties; copyrights; and patents on Schedule E
   * (Form 1040).
   */
  royalties?: number; // float

  /**
   * The amount shown may be payments received as the beneficiary of a deceased employee, prizes,
   * awards, taxable damages, Indian gaming profits, or other taxable income.
   */
  otherIncome?: number; // float

  /**
   * The backup withholding or withholding on Indian gaming profits. Generally, a payer must backup
   * withhold if recipient did not furnish a TIN.
   */
  federalIncomeTaxWithheld?: number; // float

  /**
   * The amount paid to a fishing boat crew member who is considered by the operator to be
   * self-employed.
   */
  fishingBoatProceeds?: number; // float

  /**
   * The medical and health care payments for individuals.
   */
  medicalPayments?: number; // float

  /**
   * If true, consumer products totaling $5,000 or more were sold for resale, on a buy-sell,
   * a deposit-commission, or other basis.
   */
  hasDirectSalesOver5000?: boolean;

  /**
   * The substitute payments in lieu of dividends or tax-exempt interest received by your broker
   * on your behalf as a result of a loan of your securities.
   */
  substitutePayments?: number; // float

  /**
   * The crop insurance proceeds of $600 or more paid to farmers by insurance companies unless the
   * farmer has informed the insurance company that expenses have been capitalized under section 278, 263A, or 447.
   */
  cropInsuranceProceeds?: number; // float

  /**
   * The gross proceeds paid to an attorney in connection with legal services.
   */
  grossProceedsAttorney?: number; // float

  /**
   * The amount paid for the purchase of fish for resale from any person engaged in the trade or business of
   * catching fish.
   */
  fishPurchasedForResale?: number; // float

  /**
   * The current year deferrals as a nonemployee under a nonqualified deferred compensation (NQDC) plan that
   * is subject to the requirements of section 409A plus any earnings on current and prior year deferrals.
   */
  section409ADeferrals?: number; // float

  /**
   * The total compensation of excess golden parachute payments subject to a 20% excise tax.
   */
  excessGoldenParachutePayments?: number; // float

  /**
   * The income as a nonemployee under an NQDC plan that does not meet the requirements of section 409A. Any
   * amount included in `section409A` that is currently taxable should also be included.
   */
  nqdc?: number; // float

  /**
   * Up to two (2) state tax information objects.
   */
  stateTaxInfo?: StateTaxInfoWithIncome[];
}
