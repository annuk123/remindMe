import { Id } from "../_generated/dataModel";

export interface UserType {
  _id: Id<"users">;
  _creationTime: number;
  name: string;
  email: string;
  password?: string;
  createdAt: number;
}
