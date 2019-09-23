import React, { AllHTMLAttributes } from 'react';

export const IconBookmarkSvg = (props: AllHTMLAttributes<SVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    focusable="false"
    fill="currentColor"
    width={16}
    height={16}
    {...props}
  >
    <path
      d="M18 21l-6-4-6 4V5c-.1-1 .7-1.9 1.7-2h8.6c1 .1 1.8 1 1.7 2v16z"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
