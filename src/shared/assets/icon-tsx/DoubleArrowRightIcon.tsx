import * as React from 'react';
import { IconProps } from './props';

export function DoubleArrowRightIcon(props: IconProps): React.ReactElement {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0)">
        <path
          d="M5.0026 9.49967V5.33301L0.835938 9.49967V0.333008L5.0026 4.49967V0.333008L9.58594 4.91634L5.0026 9.49967Z"
          fill="#00506D"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="8.75" height="9.16667" fill="white" transform="translate(0.835938 0.333008)" />
        </clipPath>
      </defs>
    </svg>
  );
}
