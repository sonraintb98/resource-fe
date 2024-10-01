import {
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { useHandleApiError } from "./";
import { ApiErrors } from "../../configs";

export type UseAppQueryResult<Response> = UseQueryResult<Response, ApiErrors>;

export function useAppQuery<
  Key extends QueryKey = QueryKey,
  Response = unknown,
  SelectData = Response
>(
  options: UseQueryOptions<Response, ApiErrors, SelectData, Key> = {}
): UseAppQueryResult<SelectData> {
  const { handleApiError } = useHandleApiError();

  return useQuery<Response, ApiErrors, SelectData, Key>({
    retry: false,
    staleTime: Infinity,
    refetchOnMount: "always",
    refetchOnWindowFocus: false,
    onError(error) {
      handleApiError(error);
    },
    ...options,
  });
}
