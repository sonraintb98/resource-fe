import { useAppMutation, UseAppMutationResult } from "@/shared/hooks/api";
import { LoginRequest, LoginResponse } from "@/components/auth/models";
import { postLogin } from "../../api";

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
