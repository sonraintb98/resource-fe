import { safeApiClient } from "@/shared/configs";
import {
  EmployeeRequest,
  EmployeeResponse,
} from "@/components/Employees/models/employee.model";

export async function postEmployee(
  params: EmployeeRequest,
): Promise<EmployeeResponse> {
  const response = await safeApiClient.post(`/employees/create`, params);
  return response.data;
}
