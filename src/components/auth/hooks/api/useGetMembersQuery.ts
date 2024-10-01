import { useAppQuery, UseAppQueryResult } from "@/shared/hooks";
import { MembersRequest, MembersResponse } from "../../models";
import { getAllMembers } from "@/components/auth/api";

type UseGetMembersQueryProps = {
  params: MembersRequest;
  isEnable?: boolean;
};
export const GET_MEMBERS_QUERY = "GET_MEMBERS_QUERY";

type UseGetMembersQueryResult = Pick<
  UseAppQueryResult<MembersResponse>,
  "data" | "status" | "error" | "isFetching" | "refetch"
>;

export function useGetMembersQuery({
  params,
  isEnable = true,
}: UseGetMembersQueryProps): UseGetMembersQueryResult {
  const { page, limit } = params;
  const { data, status, error, isFetching, refetch } = useAppQuery<
    [typeof GET_MEMBERS_QUERY, number | undefined, number | undefined],
    MembersResponse
  >({
    queryKey: [GET_MEMBERS_QUERY, page, limit],
    queryFn: () => getAllMembers(),
    enabled: isEnable,
    staleTime: 0,
    cacheTime: 0,
  });

  return { data, status, error, isFetching, refetch };
}
