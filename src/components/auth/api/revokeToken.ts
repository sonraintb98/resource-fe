import { apiClient } from "@/shared/configs";

export type RevokeTokenRequest = {
  refreshToken: string;
  idToken?: string;
};

export const revokeToken = async (
  params: RevokeTokenRequest,
): Promise<void> => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
  };

  await apiClient.post<void>(
    "/token/revoke",
    new URLSearchParams(params).toString(),
    {
      headers,
    },
  );
};
