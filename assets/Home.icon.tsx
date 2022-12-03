import React, { FC } from 'react';
import type { IconProps, Props, PropTypes } from '../typescript';

const Home: FC<PropTypes<Props, IconProps>> = (props) => {
  return (
      <svg
          {...props}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 52.5C13.625 52.5 12.4483 52.0108 11.47 51.0325C10.49 50.0525 10 48.875 10 47.5V25C10 24.2083 10.1775 23.4583 10.5325 22.75C10.8858 22.0417 11.375 21.4583 12 21L27 9.75C27.4583 9.41667 27.9375 9.16667 28.4375 9C28.9375 8.83333 29.4583 8.75 30 8.75C30.5417 8.75 31.0625 8.83333 31.5625 9C32.0625 9.16667 32.5417 9.41667 33 9.75L48 21C48.625 21.4583 49.115 22.0417 49.47 22.75C49.8233 23.4583 50 24.2083 50 25V47.5C50 48.875 49.5108 50.0525 48.5325 51.0325C47.5525 52.0108 46.375 52.5 45 52.5H35V35H25V52.5H15Z"
        fill="#232323"
      />
    </svg>
  );
};
export default Home;