import * as React from 'react';
import Image, { StaticImageData } from 'next/image';
import classes from './ErrorPage.module.scss';

type Props = {
  image: StaticImageData;
  title: React.ReactNode;
  message: React.ReactNode;
  actionButtonText?: string;
  actionButtonIcon?: React.FC;
  onActionButtonClick?: () => void;
};

export function ErrorPage({
  image,
  title,
  message,
  actionButtonText,
  onActionButtonClick,
  actionButtonIcon: ButtonIcon,
}: Props) {
  const buttonIcon = ButtonIcon ? (
    <span className={classes['buttonIcon']}>
      <ButtonIcon />
    </span>
  ) : null;

  return (
    <main className={classes['root']}>
      <div className={classes['container']}>
        <Image src={image} alt={'Logo'} />

        <h1 className={classes['title']}>{title}</h1>

        <div className={classes['message']}>{message}</div>

        {actionButtonText ? (
          <button onClick={onActionButtonClick} className={classes['button']}>
            {buttonIcon}
            <span>{actionButtonText}</span>
          </button>
        ) : null}
      </div>
    </main>
  );
}
