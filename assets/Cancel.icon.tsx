import React, { FC } from 'react';

import type { IconProps, Props, PropTypes } from '../typescript';

const Cancel: FC<PropTypes<Props, IconProps>> = (props) => {
  return (
    <svg
      {...props}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 3.455L8.545 2L6 4.545L3.455 2L2 3.455L4.545 6L2 8.545L3.455 10L6 7.455L8.545 10L10 8.545L7.455 6L10 3.455Z"
        fill="black"
      />
    </svg>
  );
};
export default Cancel;
