import { apiClient } from "@/shared/configs";
import { ApiResponse } from "@/shared/models";
import { tokensManager } from "../services";
import { RefreshTokenRequest } from "@/components/auth/models";

export const getRefreshToken = async (
  params: RefreshTokenRequest,
): Promise<ApiResponse> => {
  tokensManager.removeAll();
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
  };

  const response = await apiClient.post<ApiResponse>(
    "/token/exchange",
    new URLSearchParams(params).toString(),
    {
      headers,
    },
  );

  return response.data;
};
