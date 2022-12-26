import React, { FC } from 'react';

import type { IconProps, Props, PropTypes } from '../typescript';

const Add: FC<PropTypes<Props, IconProps>> = (props) => {
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
        d="M6 1C3.24 1 1 3.24 1 6C1 8.76 3.24 11 6 11C8.76 11 11 8.76 11 6C11 3.24 8.76 1 6 1ZM8.5 6.5H6.5V8.5H5.5V6.5H3.5V5.5H5.5V3.5H6.5V5.5H8.5V6.5Z"
        fill="black"
      />
    </svg>
  );
};
export default Add;
