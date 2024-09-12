import * as React from 'react';
import { ApiErrors } from '../../configs';

type UseHandleApiErrorReturnType = {
  handleApiError: (error: Error) => void;
};

type HandleApiOptions = {
  onCommonError?: () => void;
};

export function useHandleApiError(option: HandleApiOptions = {}): UseHandleApiErrorReturnType {
  const handleApiError = React.useCallback(
    (error: ApiErrors) => {
      if (!error) {
        return;
      }
      if (option.onCommonError) {
        option.onCommonError();
      }
    },
    [option],
  );

  return { handleApiError };
}
