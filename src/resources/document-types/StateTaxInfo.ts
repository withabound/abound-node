export interface StateTaxInfo {
  /**
   * The filing state code. The lowercase abbreviation of the state (ca for California).
   */
  filingState?: string;

  /**
   * The payer's state identification number.
   */
  payerStateId?: string;

  /**
   * The state tax withheld.
   */
  stateTaxWithheld?: number; // float
}

export interface StateTaxInfoWithIncome extends StateTaxInfo {
  /**
   * The state income.
   */
  stateIncome?: number; // float
}
