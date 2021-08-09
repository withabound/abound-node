import { AboundResource } from "./AboundResource";
import { AboundBulkResponse, AboundResponse } from "./AboundResponse";

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

// response body
export interface User extends UserRequest {
  userId: string;
}

/*
 * See https://docs.withabound.com/reference#users
 */
export class Users extends AboundResource<UserRequest, User> {
  path = "/users";

  public async list(): Promise<AboundBulkResponse<User>> {
    return super.list();
  }

  public async create(user: UserRequest): Promise<AboundResponse<User>> {
    return super.create({ user });
  }

  public async retrieve(id: string): Promise<AboundResponse<User>> {
    return super.retrieve(id);
  }

  public async update(
    id: string,
    user: UserRequest
  ): Promise<AboundResponse<User>> {
    return super.update(id, { user });
  }
}
