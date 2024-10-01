import { IconProps } from "@/shared/assets/icon-tsx/props";
import * as React from "react";

export function BackIcon(props: IconProps): React.ReactElement {
  return (
    <svg
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.31641 12.7109C7.15234 12.8568 6.9974 12.8568 6.85156 12.7109L1.13672 6.96875C0.972656 6.82292 0.972656 6.67708 1.13672 6.53125L6.85156 0.789062C6.9974 0.643229 7.15234 0.643229 7.31641 0.789062L7.86328 1.33594C8.00911 1.48177 8.00911 1.63672 7.86328 1.80078L3.625 6.03906H12.9492C13.168 6.03906 13.2773 6.14844 13.2773 6.36719V7.13281C13.2773 7.35156 13.168 7.46094 12.9492 7.46094H3.625L7.86328 11.6992C8.00911 11.8633 8.00911 12.0182 7.86328 12.1641L7.31641 12.7109Z"
        fill="currentColor"
      />
    </svg>
  );
}
