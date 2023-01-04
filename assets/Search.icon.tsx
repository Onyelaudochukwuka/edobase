import React, { FC } from 'react';

import type { IconProps, Props, PropTypes } from '../typescript';

const Search: FC<PropTypes<Props, IconProps>> = (props) => {
  return (
    <svg
      {...props}
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.7832 12.108C13.0491 12.108 13.3041 12.214 13.4917 12.4024L17.6753 16.6032C18.1082 17.0359 18.1082 17.7429 17.6753 18.1755C17.2424 18.6082 16.535 18.6082 16.1021 18.1755L11.9079 13.9838C11.7203 13.7962 11.6148 13.5418 11.6148 13.2765V12.9804C11.6148 12.9014 11.5842 12.8255 11.5293 12.7686C11.4173 12.6525 11.2345 12.6443 11.1077 12.7442C9.65282 13.89 7.72948 14.4646 5.69161 14.1235C2.75639 13.6275 0.412436 11.1794 0.0534522 8.22484C-0.495582 3.76128 3.26319 0.00470888 7.72937 0.553421C10.6857 0.912194 13.1352 3.25477 13.6315 6.18827C13.9728 8.22487 13.3979 10.147 12.2515 11.601C12.1516 11.7278 12.1597 11.9107 12.2759 12.0227C12.3327 12.0774 12.4086 12.108 12.4874 12.108H12.7832ZM2.11234 7.35954C2.11234 9.98703 4.23456 12.108 6.86359 12.108C9.49262 12.108 11.6148 9.98703 11.6148 7.35954C11.6148 4.73206 9.49262 2.61108 6.86359 2.61108C4.23456 2.61108 2.11234 4.73206 2.11234 7.35954Z"
        fill="black"
      />
    </svg>
  );
};
export default Search;
