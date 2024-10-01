import * as React from "react";
import { stateCodeManager, tokensManager } from "../services";
import { envVariables } from "@/shared/configs";
import { revokeToken } from "@/components/auth/api";

type UseLogoutReturn = {
  logout: (state: string | undefined) => Promise<void>;
};

export async function revokeRefreshToken(): Promise<void> {
  const refreshToken = tokensManager.get("refreshToken");
  const idToken = tokensManager.get("idToken");
  const promises: Promise<void>[] = [];
  if (refreshToken) {
    promises.push(
      revokeToken({
        idToken,
        refreshToken,
      }),
    );
  }

  try {
    await Promise.all(promises);
  } catch {}

  tokensManager.removeAll();
}

export function useLogout(): UseLogoutReturn {
  const logout = React.useCallback(async () => {
    await revokeRefreshToken();

    stateCodeManager.triggerLogoutAllTabs();

    window.location.href = `${envVariables.PAGE_ENDPOINT}`;
  }, []);

  return { logout };
}
