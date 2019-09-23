import React, { AllHTMLAttributes } from 'react';

export const IconPositiveSvg = (props: AllHTMLAttributes<SVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    focusable="false"
    fill="currentColor"
    width={16}
    height={16}
    {...props}
  >
    <circle
      cx={12}
      cy={12}
      r={10}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeMiterlimit={10}
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 10l-5 5-2-2"
    />
  </svg>
);
