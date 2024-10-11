import { useAppQuery, UseAppQueryResult } from "@/shared/hooks";
import { EmployeesRequest, EmployeesResponse } from "../../models";
import { getAllMembers } from "@/components/auth/api";
import { getAllEmployees } from "@/components/Employees/api/getAllEmployees";

type UseGetEmployeesQueryProps = {
  params: EmployeesRequest;
  isEnable?: boolean;
};
export const GET_MEMBERS_QUERY = "GET_MEMBERS_QUERY";

type UseGetMembersQueryResult = Pick<
  UseAppQueryResult<EmployeesResponse>,
  "data" | "status" | "error" | "isFetching" | "refetch"
>;

export function useGetEmployeesQuery({
  params,
  isEnable = true,
}: UseGetEmployeesQueryProps): UseGetMembersQueryResult {
  const { page, limit } = params;
  const { data, status, error, isFetching, refetch } = useAppQuery<
    [typeof GET_MEMBERS_QUERY, number | undefined, number | undefined],
    EmployeesResponse
  >({
    queryKey: [GET_MEMBERS_QUERY, page, limit],
    queryFn: () => getAllEmployees(),
    enabled: isEnable,
    staleTime: 0,
    cacheTime: 0,
  });

  return { data, status, error, isFetching, refetch };
}
