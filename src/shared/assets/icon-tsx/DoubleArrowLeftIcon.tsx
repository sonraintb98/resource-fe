import * as React from 'react';
import { IconProps } from './props';

export function DoubleArrowLeftIcon(props: IconProps): React.ReactElement {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0)">
        <path
          d="M5.41927 0.333334L5.41927 4.5L9.58594 0.333334L9.58594 9.5L5.41927 5.33333L5.41927 9.5L0.835939 4.91667L5.41927 0.333334Z"
          fill="#00506D"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="8.75" height="9.16667" fill="white" transform="translate(9.58594 9.5) rotate(-180)" />
        </clipPath>
      </defs>
    </svg>
  );
}
