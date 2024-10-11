import { EmployeesResponse } from "@/components/Employees/models";
import { safeApiClient } from "@/shared/configs";
// import { MembersResponse } from "../models";

export async function getAllEmployees(): Promise<EmployeesResponse> {
  const response = await safeApiClient.get<EmployeesResponse>(
    `/employees/getAllEmployees`,
  );
  return response.data;
}
