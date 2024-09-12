import { User } from './';

export type LogoutRequest = {
  email: string;
};

export type LogoutResponse = {
  data: User;
};
