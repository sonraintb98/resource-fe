import * as React from "react";
import { useAppMutation, UseAppMutationResult } from "@/shared/hooks/api";
import { postLogout } from "../../api";
import { LogoutRequest, LogoutResponse } from "../../models";

type UseLogoutResult = Pick<
  UseAppMutationResult<LogoutResponse, LogoutRequest>,
  "mutateAsync" | "status" | "error" | "isLoading" | "mutate"
>;

export function useSubmitLogout(): UseLogoutResult {
  const { mutateAsync, status, error, isLoading, mutate } = useAppMutation<
    LogoutResponse,
    LogoutRequest
  >({
    mutationFn(data: LogoutRequest) {
      return postLogout(data);
    },
  });

  return { mutateAsync, status, error, isLoading, mutate };
}
