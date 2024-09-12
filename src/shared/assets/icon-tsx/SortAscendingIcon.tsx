import * as React from 'react';
import { IconProps } from './props';

export function SortAscendingIcon(props: IconProps): React.ReactElement {
  return (
    <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.1251 3.74983H2.2501V10.8748C2.2501 10.9743 2.28961 11.0697 2.35994 11.14C2.43027 11.2103 2.52565 11.2498 2.6251 11.2498H3.3751C3.47456 11.2498 3.56994 11.2103 3.64027 11.14C3.7106 11.0697 3.7501 10.9743 3.7501 10.8748V3.74983H4.8751C5.20815 3.74983 5.3762 3.34576 5.14018 3.10975L3.26518 0.859748C3.19486 0.789475 3.09952 0.75 3.0001 0.75C2.90069 0.75 2.80535 0.789475 2.73503 0.859748L0.860026 3.10975C0.624714 3.34529 0.791823 3.74983 1.1251 3.74983Z"
        fill="currentColor"
      />
    </svg>
  );
}
