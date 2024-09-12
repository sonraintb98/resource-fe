export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  email: string;
  accessToken: string;
  refreshToken: string;
  idToken: string;
};
