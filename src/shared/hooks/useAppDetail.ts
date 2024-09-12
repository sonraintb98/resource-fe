import * as React from 'react';
import { NiceModalHandler, NiceModalHocProps, useModal } from '@ebay/nice-modal-react';
import { useCallbackRef } from './useCallbackRef';

type Show<T> = (this: void, props?: T) => Promise<void>;

export type UseAppModalDtailPopupReturnType<T> = Pick<NiceModalHandler, 'visible'> & {
  showDetailPopup: Show<T>;
  removeDetailPopup(this: void): void;
};

export function useAppModalDetail<Props>(
  Component: React.FC<Props & NiceModalHocProps>,
): UseAppModalDtailPopupReturnType<Props> {
  const modal = useModal(Component);
  const refShow = useCallbackRef(modal.show);
  const refRemove = useCallbackRef(modal.remove);

  const showDetailPopup = React.useCallback(
    async (props?: Props) => {
      await refShow.current((props ?? {}) as never);
    },
    [refShow],
  );

  const removeDetailPopup = React.useCallback(() => {
    refRemove.current();
  }, [refRemove]);

  return React.useMemo<UseAppModalDtailPopupReturnType<Props>>(
    () => ({
      visible: modal.visible,
      showDetailPopup,
      removeDetailPopup,
    }),
    [modal.visible, showDetailPopup, removeDetailPopup],
  );
}
