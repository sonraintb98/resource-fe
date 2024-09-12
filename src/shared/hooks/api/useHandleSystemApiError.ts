import * as React from "react";
import { ApiErrors, SessionTimeOutError } from "../../configs";
import { useRouter } from "next/router";
import { revokeRefreshToken } from "@/components/auth";

type UseHandleSystemApiErrorReturnType = {
  handleApiError: (error: Error) => Promise<void>;
};

export function useHandleSystemApiError(): UseHandleSystemApiErrorReturnType {
  const router = useRouter();
  const handleApiError = React.useCallback(
    async (error: ApiErrors) => {
      if (error instanceof SessionTimeOutError) {
        await revokeRefreshToken();
        router.reload();
        return;
      }
      router.replace("/500");
    },
    [router],
  );

  return { handleApiError };
}
