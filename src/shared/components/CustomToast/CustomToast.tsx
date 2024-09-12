import * as React from 'react';
import toastClasses from './CustomToast.module.scss';
import classnames from 'classnames';

type Props = {
  className?: string;
  title?: string;
  content?: string | any;
  note?: string;
};

export function CustomToast({ title, content, note, className }: Props): React.ReactElement {
  return (
    <div className={classnames(className)}>
      {title && <div className={toastClasses['toastHeader']}>{title}</div>}
      {content && <div className={toastClasses['toastBody']}>{content}</div>}
      {note && <div className={toastClasses['toastNote']}>{note}</div>}
    </div>
  );
}
