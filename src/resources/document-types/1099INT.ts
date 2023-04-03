import { BaseDocumentRequest, DocumentType } from "../Documents";
import { StateTaxInfo } from "./StateTaxInfo";

// request body
export interface Ten99INTDocumentRequest
  extends BaseDocumentRequest,
    Ten99INTFormFields {
  type: DocumentType.TEN99INT;
  payerId: string;
  year: number;
}

export interface Ten99INTFormFields {
  /**
   * If `true`, the corrected checkbox will be marked on the document.
   */
  isCorrected?: boolean;

  /**
   * Satisfying a requirement to report with respect to a U.S. account for chapter 4 purposes.
   */
  hasFatcaFilingRequirement?: boolean;

  /**
   * The IRS “encourages” a payer to designate an account number for all Forms 1099-INT filed. This
   * field is required if payer has multiple accounts for a recipient for whom it is filing more than
   * one Form 1099-INT. This field is also required if hasFatcaFilingRequirement is true.
   */
  accountNumber?: string;

  /**
   * A routing and transit number (RTN) is a unique nine-digit number used to identify a bank for
   * purposes of directing financial flows. This is essentially bank's bank account – their account
   * with the Federal Reserve.
   */
  payersRoutingNumber?: string;

  /**
   * The taxable interest paid to you during the calendar year by the payer. This does not include
   * interest for usSavingsBondsInterest. May also show the total amount of the credits from clean
   * renewable energy bonds, new clean renewable energy bonds, qualified energy conservation bonds,
   * qualified zone academy bonds, qualified school construction bonds, and build America bonds
   * that must be included in your interest income.
   */
  interestIncome?: number; // float

  /**
   * The interest or principal forfeited because of early withdrawal of time savings. You may deduct
   * this amount to figure your adjusted gross income on your income tax return.
   */
  earlyWithdrawalPenalty?: number; // float

  /**
   * Shows interest on U.S. Savings Bonds, Treasury bills, Treasury bonds, and Treasury notes. This
   * may or may not all be taxable. This interest is exempt from state and local income taxes. This
   * interest is not included in `interestIncome`.
   */
  usSavingsBondsInterest?: number; // float

  /**
   * The federal income tax withheld. A payer must backup withhold on certain payments if recipient
   * did not provide a TIN to the payer.
   */
  federalIncomeTaxWithheld?: number; // float

  /**
   * Any amount is your share of investment expenses of a singleclass REMIC. This amount is included
   * in `interestIncome`. NOTE: This amount is not deductible.
   */
  investmentExpenses?: number; // float

  /**
   * The foreign tax paid.
   */
  foreignTaxPaid?: number; // float

  /**
   * The country or U.S. possession to which the foreign tax was paid.
   */
  foreignTaxPaidCountry?: string;

  /**
   * The tax-exempt interest paid to you during the calendar year by the payer. This amount may be
   * subject to backup withholding. See `federalIncomeTaxWithheld`.
   */
  taxExemptInterest?: number; // float

  /**
   * The tax-exempt interest subject to the alternative minimum tax. This amount is included in
   * `taxExemptInterest`.
   */
  specifiedPrivateActivityBondInterest?: number; // float

  /**
   * For a taxable or tax-exempt covered security, if you made an election under section 1278(b)
   * to include market discount in income as it accrues and you notified your payer of the election
   * in writing in accordance with Regulations section 1.6045-1(n)(5), shows the market discount
   * that accrued on the debt instrument during the year while held by you, unless it was reported
   * on Form 1099-OID.
   */
  marketDiscount?: number; // float

  /**
   * For a taxable covered security (other than a U.S. Treasury obligation), shows the amount of
   * premium amortization allocable to the interest payment(s), unless you notified the payer in
   * writing in accordance with Regulations section 1.6045-1(n)(5) that you did not want to
   * amortize bond premium under section 171.
   */
  bondPremium?: number; // float

  /**
   * For a U.S. Treasury obligation that is a covered security, shows the amount of premium
   * amortization allocable to the interest payment(s), unless you notified the payer in writing
   * in accordance with Regulations section 1.6045-1(n)(5) that you did not want to amortize
   * bond premium under section 171.
   */
  bondPremiumTreasury?: number; // float

  /**
   * For a tax-exempt covered security, shows the amount of premium amortization allocable to the
   * interest payment(s).
   */
  bondPremiumTaxExemptBond?: number; // float

  /**
   * Up to two (2) state tax information objects.
   */
  stateTaxInfo: StateTaxInfo[];
}
