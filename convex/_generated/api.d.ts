/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as actions_auth from "../actions/auth.js";
import type * as actions_email from "../actions/email.js";
import type * as actions from "../actions.js";
import type * as contact from "../contact.js";
import type * as createUser from "../createUser.js";
import type * as crons from "../crons.js";
import type * as internal_welcome from "../internal/welcome.js";
import type * as internal_ from "../internal.js";
import type * as reminders from "../reminders.js";
import type * as resetTokens from "../resetTokens.js";
import type * as types_user from "../types/user.js";
import type * as users from "../users.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  "actions/auth": typeof actions_auth;
  "actions/email": typeof actions_email;
  actions: typeof actions;
  contact: typeof contact;
  createUser: typeof createUser;
  crons: typeof crons;
  "internal/welcome": typeof internal_welcome;
  internal: typeof internal_;
  reminders: typeof reminders;
  resetTokens: typeof resetTokens;
  "types/user": typeof types_user;
  users: typeof users;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
