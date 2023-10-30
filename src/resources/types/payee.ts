export type Payee = {
  name: string;
  name2?: string;
  tin: string;
  tinType?: "INDIVIDUAL" | "BUSINESS";
  tinFingerprint: string;
  address: string;
  address2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country: string;
};

export type PayeeRequest = {
  name: string;
  name2?: string;
  tin: string;
  address: string;
  address2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country: string;
};
