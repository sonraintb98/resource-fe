import * as React from 'react';
import { IconProps } from './props';

export function TrashIconV2(props: IconProps): React.ReactElement {
  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8.3335 9.66667V14.6667M11.6668 9.66667V14.6667M3.3335 6.33333H16.6668M15.8335 6.33333L15.111 16.4517C15.0811 16.8722 14.8929 17.2657 14.5844 17.553C14.2759 17.8403 13.87 18 13.4485 18H6.55183C6.13028 18 5.72439 17.8403 5.4159 17.553C5.10742 17.2657 4.91926 16.8722 4.88933 16.4517L4.16683 6.33333H15.8335ZM12.5002 6.33333V3.83333C12.5002 3.61232 12.4124 3.40036 12.2561 3.24408C12.0998 3.0878 11.8878 3 11.6668 3H8.3335C8.11248 3 7.90052 3.0878 7.74424 3.24408C7.58796 3.40036 7.50016 3.61232 7.50016 3.83333V6.33333H12.5002Z"
        stroke="#DC3545"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
