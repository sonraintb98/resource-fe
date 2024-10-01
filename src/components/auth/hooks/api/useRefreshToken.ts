import * as React from "react";
import { Request } from "@/shared/configs";
import { tokensManager } from "@/components/auth/services";
import { getRefreshToken } from "@/components/auth/api";
import { revokeRefreshToken } from "@/components/auth/hooks/useLogout";

type UseRefreshTokenReturn = {
  refreshToken: () => Promise<void>;
};

export async function refreshTokenFn(
  refreshToken: string | undefined,
): Promise<void> {
  if (!refreshToken) {
    return;
  }

  const { data } = await getRefreshToken({
    refreshToken,
  });
  window.location.reload();
}

export function useRefreshToken(): UseRefreshTokenReturn {
  const refreshToken = React.useCallback(async () => {
    const expiresAt = tokensManager.get("expiresAt");
    const expiresRefreshAt = tokensManager.get("expiresRefreshAt");
    if (
      expiresRefreshAt &&
      !tokensManager.hasTokenExpired(expiresRefreshAt, 0)
    ) {
      if (expiresAt && tokensManager.hasTokenExpired(expiresAt, 2)) {
        const reToken = tokensManager.get("refreshToken");

        if (!Request.refreshTokenFn) {
          Request.refreshTokenFn = refreshTokenFn(reToken);
        }

        await Request.refreshTokenFn
          .catch(() => revokeRefreshToken())
          .finally(() => {
            Request.refreshTokenFn = null;
          });
      }
    } else {
      await revokeRefreshToken();
    }
  }, []);

  return { refreshToken };
}
