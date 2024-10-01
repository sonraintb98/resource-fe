import { safeApiClient } from "@/shared/configs";
import { LoginRequest, LoginResponse } from "@/components/auth/models";

export async function postLogin(params: LoginRequest): Promise<LoginResponse> {
  const response = await safeApiClient.post(`/auth/signin`, params);
  return response.data;
}
