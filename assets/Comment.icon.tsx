import React, { FC } from 'react';

import type { IconProps, Props, PropTypes } from '../typescript';

const Comment: FC<PropTypes<Props, IconProps>> = (props) => {
  return (
    <svg
      {...props}
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.83618 6.48608H16.0005V8.31895H6.83618V6.48608ZM6.83618 10.1518H13.2512V11.9847H6.83618V10.1518Z"
        fill="#232323"
      />
      <path
        d="M18.7502 1.90381H4.08726C3.07644 1.90381 2.25439 2.72585 2.25439 3.73668V20.2325L7.14174 16.5668H18.7502C19.761 16.5668 20.5831 15.7447 20.5831 14.7339V3.73668C20.5831 2.72585 19.761 1.90381 18.7502 1.90381ZM18.7502 14.7339H6.53139L4.08726 16.5668V3.73668H18.7502V14.7339Z"
        fill="#232323"
      />
    </svg>
  );
};
export default Comment;
