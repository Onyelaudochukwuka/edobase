import React, { FC } from 'react';

import type { IconProps, Props, PropTypes } from '../typescript';

const LoginPointer: FC<PropTypes<Props, IconProps>> = (props) => (
  <svg
    {...props}
    width="130"
    height="138"
    viewBox="0 0 130 138"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_144_3294)">
      <path d="M90 65L40.5 93.5788L40.5 36.4212L90 65Z" fill="white" />
    </g>
    <defs>
      <filter
        id="filter0_d_144_3294"
        x="0.5"
        y="0.421387"
        width="129.5"
        height="137.157"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="20" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_144_3294"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_144_3294"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default LoginPointer;
