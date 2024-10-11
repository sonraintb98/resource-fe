import { useAppMutation, UseAppMutationResult } from "@/shared/hooks/api";
import {
  EmployeeRequest,
  EmployeeResponse,
} from "@/components/Employees/models/employee.model";
import { postCreateEmployee } from "@/components/Employees/api";

type UseLoginResult = Pick<
  UseAppMutationResult<EmployeeResponse, EmployeeRequest>,
  "mutateAsync" | "status" | "error" | "isLoading" | "mutate"
>;

export function useSubmitEmployee(): UseLoginResult {
  const { mutateAsync, status, error, isLoading, mutate } = useAppMutation<
    EmployeeResponse,
    EmployeeRequest
  >({
    mutationFn(data: EmployeeRequest) {
      return postCreateEmployee(data);
    },
  });

  return { mutateAsync, status, error, isLoading, mutate };
}
