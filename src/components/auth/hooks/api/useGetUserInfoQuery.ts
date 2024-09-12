import * as React from "react";
import { ApiErrors, RequestAbortedError } from "@/shared/configs";
import {
  useAppQuery,
  UseAppQueryResult,
  useHandleSystemApiError,
} from "@/shared/hooks";
import { getUser } from "../../api";
import { User } from "../../models";

const GET_AUTH_USER_KEY = "GET_AUTH_USER";

type UseGetUserInfoQueryResult = Pick<
  UseAppQueryResult<User>,
  "data" | "error" | "status" | "refetch"
>;

type Params = { isEnable: boolean };

type UseGetUserInfoQueryBaseOptions = {
  onError?: (err: ApiErrors) => void;
  enabled?: boolean;
};

export function useGetUserInfoQueryBase({
  enabled,
  onError,
}: UseGetUserInfoQueryBaseOptions = {}): UseGetUserInfoQueryResult {
  const { data, status, error, refetch } = useAppQuery<
    typeof GET_AUTH_USER_KEY,
    User
  >({
    queryKey: GET_AUTH_USER_KEY,
    queryFn() {
      return getUser();
    },
    onError,
    enabled: enabled,
    refetchOnMount: false,
  });

  return { data, status, error, refetch };
}

export function useGetUserInfoQuery({
  isEnable = false,
}: Params): UseGetUserInfoQueryResult {
  const { handleApiError } = useHandleSystemApiError();
  const handleError = React.useCallback(
    (err: ApiErrors) => {
      if (err instanceof RequestAbortedError) {
        return;
      }

      handleApiError(err);
    },
    [handleApiError],
  );

  const { data, status, error, refetch } = useGetUserInfoQueryBase({
    onError: handleError,
    enabled: isEnable,
  });

  return { data, status, error, refetch };
}
