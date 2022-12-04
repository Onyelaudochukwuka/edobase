import React, { FC } from 'react';

import type { IconProps, Props, PropTypes } from '../typescript';

const Key: FC<PropTypes<Props, IconProps>> = (props) => (
  <svg
    {...props}
    width="150"
    height="150"
    viewBox="0 0 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="150" height="150" rx="75" fill="#FFDE4E" />
    <path
      d="M82.8125 53.125C80.6166 53.1245 78.451 53.6384 76.4894 54.6255C74.5279 55.6126 72.8248 57.0454 71.5167 58.8092C70.2085 60.573 69.3318 62.6187 68.9566 64.7824C68.5814 66.9461 68.7183 69.1675 69.3562 71.2688L53.125 87.5V96.875H62.5L78.7312 80.6437C80.6655 81.2309 82.7035 81.3941 84.7065 81.1223C86.7096 80.8505 88.6304 80.1501 90.3383 79.0688C92.0461 77.9875 93.5008 76.5507 94.6031 74.8564C95.7055 73.1621 96.4296 71.25 96.7261 69.2505C97.0227 67.251 96.8846 65.2111 96.3215 63.2698C95.7584 61.3284 94.7833 59.5313 93.4628 58.0009C92.1423 56.4705 90.5074 55.2427 88.6695 54.4013C86.8316 53.5598 84.8339 53.1245 82.8125 53.125ZM82.8125 78.125C81.7367 78.1244 80.6669 77.9654 79.6375 77.6531L77.8453 77.1094L76.5219 78.4328L71.5516 83.4031L69.3969 81.25L67.1875 83.4594L69.3422 85.6141L66.8641 88.0922L64.7094 85.9375L62.5 88.1469L64.6547 90.3016L61.2062 93.75H56.25V88.7937L71.5656 73.4781L72.8906 72.1547L72.3469 70.3625C71.679 68.1609 71.7224 65.8048 72.4709 63.6293C73.2193 61.4538 74.6347 59.5697 76.5157 58.245C78.3967 56.9204 80.6475 56.2225 82.948 56.2508C85.2484 56.2791 87.4814 57.0321 89.3292 58.4027C91.1771 59.7733 92.5457 61.6916 93.2404 63.8848C93.9351 66.0781 93.9205 68.4346 93.1987 70.619C92.4769 72.8035 91.0846 74.7048 89.2199 76.0523C87.3553 77.3999 85.1131 78.1252 82.8125 78.125Z"
      fill="black"
    />
    <path
      d="M84.375 68.75C86.1009 68.75 87.5 67.3509 87.5 65.625C87.5 63.8991 86.1009 62.5 84.375 62.5C82.6491 62.5 81.25 63.8991 81.25 65.625C81.25 67.3509 82.6491 68.75 84.375 68.75Z"
      fill="black"
    />
  </svg>
);
export default Key;
