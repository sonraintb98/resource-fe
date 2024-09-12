import { useAppMutation, UseAppMutationResult } from "@/shared/hooks/api";
import { postLogin } from "../../api";
import { LoginRequest, LoginResponse } from "../../models";

type UseLoginResult = Pick<
  UseAppMutationResult<LoginResponse, LoginRequest>,
  "mutateAsync" | "status" | "error" | "isLoading" | "mutate"
>;

export function useSubmitLogin(): UseLoginResult {
  const { mutateAsync, status, error, isLoading, mutate } = useAppMutation<
    LoginResponse,
    LoginRequest
  >({
    mutationFn(data: LoginRequest) {
      return postLogin(data);
    },
  });

  return { mutateAsync, status, error, isLoading, mutate };
}
