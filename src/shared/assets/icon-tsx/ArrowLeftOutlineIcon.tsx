import * as React from 'react';
import { IconProps } from './props';

export function ArrowLeftOutlineIcon(props: IconProps): React.ReactElement {
  return (
    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6.04961 10.4154L1.63364 6.00053L6.05014 1.58563C6.26063 1.37514 6.26063 1.03464 6.05014 0.824155C5.83965 0.614198 5.49863 0.614198 5.28814 0.824155L0.491149 5.61955C0.280661 5.82951 0.280661 6.17053 0.491149 6.38049L5.28809 11.1759C5.49858 11.3858 5.84014 11.3858 6.05063 11.1759C6.2601 10.9665 6.2601 10.6254 6.04961 10.4154Z"
        fill="currentColor"
      />
    </svg>
  );
}
