import * as React from 'react';
import { NiceModalHandler, NiceModalHocProps, useModal } from '@ebay/nice-modal-react';
import { useCallbackRef } from './useCallbackRef';

type Show<T> = (this: void, props?: T) => Promise<void>;

export type UseAppModalInsuranceReturnType<T> = Pick<NiceModalHandler, 'visible'> & {
  showInsurance: Show<T>;
  removeInsurance(this: void): void;
};

export function useAppModalInsurance<Props>(
  Component: React.FC<Props & NiceModalHocProps>,
): UseAppModalInsuranceReturnType<Props> {
  const modal = useModal(Component);
  const refShow = useCallbackRef(modal.show);
  const refRemove = useCallbackRef(modal.remove);

  const showInsurance = React.useCallback(
    async (props?: Props) => {
      await refShow.current((props ?? {}) as never);
    },
    [refShow],
  );

  const removeInsurance = React.useCallback(() => {
    refRemove.current();
  }, [refRemove]);

  return React.useMemo<UseAppModalInsuranceReturnType<Props>>(
    () => ({
      visible: modal.visible,
      showInsurance,
      removeInsurance,
    }),
    [modal.visible, showInsurance, removeInsurance],
  );
}
