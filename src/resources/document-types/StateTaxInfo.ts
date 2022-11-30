export interface StateTaxInfo {
  /**
   * The filing state code. The abbreviation of the state (CA for California).
   */
  filingState: string;

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
