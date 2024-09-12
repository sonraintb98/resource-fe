import * as React from 'react';
import { IconProps } from './props';

export function ToastSuccessIcon(props: IconProps): React.ReactElement {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="8.99999" cy="8.99984" r="8.33333" fill="#36B37E" />
      <g clipPath="url(#clip0_860_11064)">
        <path
          d="M12.3337 7.05518L7.75039 11.6385L5.66705 9.55518"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_860_11064">
          <rect width="10" height="10" fill="white" transform="translate(4.00052 4.55518)" />
        </clipPath>
      </defs>
    </svg>
  );
}
