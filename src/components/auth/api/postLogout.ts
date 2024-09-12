import { safeApiClient } from "@/shared/configs";
import { LogoutRequest, LogoutResponse } from "../models";

export async function postLogout(
  params: LogoutRequest,
): Promise<LogoutResponse> {
  const response = await safeApiClient.post(`/auth/logout`, params);
  return response.data;
}
