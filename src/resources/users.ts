import { type AboundContext } from "../abound.js";
import { post, list, get, put } from "./base/base-resource.js";
import type { Pagination } from "./types/pagination.js";

// Response body
export type User = {
  id: string;
  createdAt: string;
} & UserRequest;

// Request body
export type UserRequest = {
  email?: string;
  foreignId?: string;
  metadata?: Record<string, string>;
};

// Query params
export type UserParameters = Pagination & {
  email?: string;
  foreignId?: string;
};

const resource = "users";

export function usersResource(context: AboundContext) {
  return {
    create: post<User, UserRequest>(resource, context),
    list: list<User, UserParameters>(resource, context),
    retrieve: get<User>(resource, context),
    update: put<User, UserRequest>(resource, context),
  };
}
