import { useMutation, UseMutationOptions, UseMutationResult } from 'react-query';
import { useHandleApiError } from './';
import { ApiErrors } from '../../configs';

export type UseAppMutationResult<Response, Variable = unknown> = UseMutationResult<Response, ApiErrors, Variable>;

export type UseAppMutationOptions<Response, Variable = unknown> = UseMutationOptions<Response, ApiErrors, Variable>;

export function useAppMutation<Response, Variable = unknown>(
  options: UseAppMutationOptions<Response, Variable> = {},
): UseAppMutationResult<Response, Variable> {
  const { handleApiError } = useHandleApiError();

  return useMutation<Response, ApiErrors, Variable>({
    onError(error) {
      handleApiError(error);
    },
    ...options,
  });
}
