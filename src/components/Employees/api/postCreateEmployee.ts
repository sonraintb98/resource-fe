import { safeApiClient } from "@/shared/configs";
import {
  EmployeesRequest,
  EmployeesResponse,
} from "@/components/Employees/models/employee.model";

export async function postCreateEmployee(
  params: EmployeesRequest,
): Promise<EmployeesResponse> {
  const response = await safeApiClient.post(`/employees/create`, params);
  return response.data;
}
