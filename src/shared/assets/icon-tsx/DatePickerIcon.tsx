import * as React from 'react';
import { IconProps } from './props';

export function DatePickerIcon(props: IconProps): React.ReactElement {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V3C13.5 2.72386 13.2761 2.5 13 2.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11 1.5V3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 1.5V3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.5 5.5H13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
