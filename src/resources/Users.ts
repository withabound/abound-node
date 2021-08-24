import { AboundBaseResource } from "./base/AboundBaseResource";
import { Pagination } from "./base/AboundResource";
import { AboundBulkResponse, AboundResponse } from "./base/AboundResponse";

// request body
interface UserRequest {
  email?: string;
  foreignId?: string;
  profile?: UserProfile;
}

export interface UserProfile {
  firstName?: string;
  lastName?: string;
  address?: string;
  address2?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  phoneNumber?: string;
  dateOfBirth?: string;
  socialSecurityNumber?: string;
  ipAddress?: string;
}

// query params
export interface UserParameters extends Pagination {
  foreignId?: string;
}

// response body
export interface User extends UserRequest {
  userId: Readonly<string>;
}

// deprecated fields returned from the API that are removed from payloads returned by SDK methods
interface DeprecatedUserFields extends User {
  canWithhold: boolean;
}

/*
 * See https://docs.withabound.com/reference#users
 */
export class Users extends AboundBaseResource<
  UserRequest,
  User,
  DeprecatedUserFields
> {
  path = "/users";

  getDeprecatedFields(): Array<keyof DeprecatedUserFields> {
    return ["canWithhold"];
  }

  public async list(
    parameters?: UserParameters
  ): Promise<AboundBulkResponse<User>> {
    return super.list(parameters);
  }

  public async create(user: UserRequest): Promise<AboundResponse<User>> {
    return super.create({ user });
  }

  public async retrieve(id: string): Promise<AboundResponse<User>> {
    return super.retrieve(id);
  }

  public async update(
    id: string,
    user: Partial<UserRequest>
  ): Promise<AboundResponse<User>> {
    return super.update(id, { user });
  }
}
