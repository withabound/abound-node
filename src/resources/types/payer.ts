export type Payer = {
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
  phoneNumber: string;
};

export type PayerRequest = {
  name: string;
  name2?: string;
  tin: string;
  address: string;
  address2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country: string;
  phoneNumber: string;
};
