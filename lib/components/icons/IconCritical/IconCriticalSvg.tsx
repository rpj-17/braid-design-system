import React, { AllHTMLAttributes } from 'react';

export const IconCriticalSvg = (props: AllHTMLAttributes<SVGElement>) => (
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
    <circle cx={12} cy={17} r={1} />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8v5"
    />
  </svg>
);
