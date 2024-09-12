export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  activated: boolean;
  image: string;
  role: number;
  iat: number;
  exp: number;
  lastLogin?: string;
};
