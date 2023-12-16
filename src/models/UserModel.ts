export type User = UserModel | undefined;

export interface UserModel {
  _id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
  number: number;
  isAdmin: boolean;
  userIP: string;
  purchasedProducts: string[];
  mfa: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
