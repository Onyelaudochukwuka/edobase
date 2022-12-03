import React, { FC } from 'react';

import type { IconProps, Props, PropTypes } from '../typescript';

const AuthBlur: FC<PropTypes<Props, IconProps>> = (props) => (
  <svg
    {...props}
    width="406"
    height="577"
    viewBox="0 0 406 577"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_f_148_3302)">
      <ellipse
        cx="84"
        cy="335"
        rx="172"
        ry="185"
        fill="#BD2C2C"
        fillOpacity="0.5"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_148_3302"
        x="-238"
        y="0"
        width="644"
        height="670"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="75"
          result="effect1_foregroundBlur_148_3302"
        />
      </filter>
    </defs>
  </svg>
);

export default AuthBlur;
