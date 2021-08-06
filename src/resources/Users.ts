import { AboundResource } from "./AboundResource";
import { AboundBulkResponse, AboundResponse } from "./AboundResponse";

// request body
export interface UserRequestBody {
  user: UserRequest;
}

interface UserRequest {
  email?: string;
  foreignId?: string;
  profile?: UserProfile;
  canWithhold?: boolean;
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
export class Users extends AboundResource<UserRequestBody, User> {
  path = "/users";

  public async list(): Promise<AboundBulkResponse<User>> {
    return super.list();
  }

  public async create(user: UserRequestBody): Promise<AboundResponse<User>> {
    return super.create(user);
  }

  public async retrieve(id: string): Promise<AboundResponse<User>> {
    return super.retrieve(id);
  }

  public async update(
    id: string,
    user: UserRequestBody
  ): Promise<AboundResponse<User>> {
    return super.update(id, user);
  }
}
