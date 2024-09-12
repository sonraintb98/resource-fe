import { safeApiClient } from "@/shared/configs";
import { LoginRequest, LoginResponse } from "../models";

export async function postLogin(params: LoginRequest): Promise<LoginResponse> {
  const response = await safeApiClient.post(`/auth/signin`, params);
  return response.data;
}
