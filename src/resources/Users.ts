import { Except } from "type-fest";
import { AboundBaseResource } from "./base/AboundBaseResource";
import { DeepPartial, Notes, Pagination } from "./base/AboundResource";
import { AboundBulkResponse, AboundResponse } from "./base/AboundResponse";

// request body
export interface UserRequest {
  email?: string;
  foreignId?: string;
  notes?: Notes;
  profile?: UserProfile;
  business?: UserBusiness;
}

export interface UserProfile {
  firstName?: string;
  lastName?: string;
  address?: string;
  address2?: string;
  city?: string;
  state?: string;
  country?: string; // The user's country of residence. Adhering to the ISO 3166-2 format.
  zipcode?: string;
  phoneNumber?: string; // no country code, numerical digits only
  dateOfBirth?: string; // YYYY-MM-DD
  socialSecurityNumber?: string; // no hyphens, numerical digits only
}

export interface UserBusiness {
  ein: string; // no hyphens, numerical digits only
  name: string;
  taxClassification?: TaxClassification;
  address?: string;
  address2?: string;
  city?: string;
  state?: string;
  country?: string; // The user's country of residence. Adhering to the ISO 3166-2 format.
  zipcode?: string;
}

export enum TaxClassification {
  C_CORPORATION = "cCorporation",
  ESTATE = "estate",
  INDIVIDUAL = "individual",
  LLC_PARTNERSHIP = "llcPartnership",
  LLC_C_CORPORATION = "llcCCorporation",
  LLC_S_CORPORATION = "llcSCorporation",
  PARTNERSHIP = "partnership",
  S_CORPORATION = "sCorporation",
  SINGLE_MEMBER_LLC = "singleMemberLlc",
  SOLE_PROPRIETOR = "soleProprietor",
  TRUST = "trust",
}

// query params
export interface UserParameters extends Pagination {
  foreignId?: string;
}

// response body
export interface User extends UserRequest {
  userId: Readonly<string>;
  einVerification: TinVerification;
  ssnVerification: TinVerification;
}

// list response body
export type BaseUser = Except<
  User,
  "business" | "einVerification" | "profile" | "ssnVerification"
>;

export interface TinVerification {
  status: TinVerificationStatus;
  message?: string;
  lastVerifiedTimestamp?: number;
  unlockTimestamp?: number;
}

export enum TinVerificationStatus {
  ERROR = "error",
  LOCKED_OUT = "lockedOut",
  MISMATCH = "mismatch",
  PENDING = "pending",
  UNVERIFIED = "unverified",
  VERIFIED = "verified",
}

// The raw `User` object returned from the APIs returns one deprecated field, which the SDK will remove.
interface UserApiResponse extends User {
  canWithhold: Readonly<boolean>;
}

/*
 * See https://docs.withabound.com/reference#users
 */
export default class Users extends AboundBaseResource<
  UserRequest,
  User,
  UserApiResponse
> {
  path = "/users";

  getDeprecatedFields(): Array<keyof UserApiResponse> {
    return ["canWithhold"];
  }

  public async list(
    parameters?: UserParameters
  ): Promise<AboundBulkResponse<BaseUser>> {
    const response = await super.listBaseResource(parameters);
    return {
      ...response,
      data: response.data.map<BaseUser>(
        ({
          business,
          einVerification,
          profile,
          ssnVerification,
          ...baseUser
        }) => baseUser
      ),
    };
  }

  public async create(user: UserRequest): Promise<AboundResponse<User>> {
    return super.createBaseResource({ user });
  }

  public async retrieve(id: string): Promise<AboundResponse<User>> {
    return super.retrieveBaseResource(id);
  }

  public async update(
    id: string,
    user: DeepPartial<UserRequest>
  ): Promise<AboundResponse<User>> {
    return super.updateBaseResource(id, { user });
  }
}
