import React, { FC } from 'react';

import { motion } from 'framer-motion';

import type { IconProps, PropTypes } from '../typescript';

const Check: FC<PropTypes<{ state: boolean }, IconProps>> = ({
  state,
  ...props
}) => {
  const { svg: Svg, path: Path } = motion;
  return (
    <Svg
      {...props}
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M9.1 11.8L6.925 9.625C6.74167 9.44167 6.51667 9.35 6.25 9.35C5.98333 9.35 5.75 9.45 5.55 9.65C5.36667 9.83333 5.275 10.0667 5.275 10.35C5.275 10.6333 5.36667 10.8667 5.55 11.05L8.4 13.9C8.58333 14.0833 8.81667 14.175 9.1 14.175C9.38333 14.175 9.61667 14.0833 9.8 13.9L15.475 8.225C15.6583 8.04167 15.75 7.81667 15.75 7.55C15.75 7.28333 15.65 7.05 15.45 6.85C15.2667 6.66667 15.0333 6.575 14.75 6.575C14.4667 6.575 14.2333 6.66667 14.05 6.85L9.1 11.8ZM10.5 20C9.11667 20 7.81667 19.7373 6.6 19.212C5.38333 18.6873 4.325 17.975 3.425 17.075C2.525 16.175 1.81267 15.1167 1.288 13.9C0.762667 12.6833 0.5 11.3833 0.5 10C0.5 8.61667 0.762667 7.31667 1.288 6.1C1.81267 4.88333 2.525 3.825 3.425 2.925C4.325 2.025 5.38333 1.31233 6.6 0.787C7.81667 0.262333 9.11667 0 10.5 0C11.8833 0 13.1833 0.262333 14.4 0.787C15.6167 1.31233 16.675 2.025 17.575 2.925C18.475 3.825 19.1873 4.88333 19.712 6.1C20.2373 7.31667 20.5 8.61667 20.5 10C20.5 11.3833 20.2373 12.6833 19.712 13.9C19.1873 15.1167 18.475 16.175 17.575 17.075C16.675 17.975 15.6167 18.6873 14.4 19.212C13.1833 19.7373 11.8833 20 10.5 20Z"
        initial={{ fill: '#DDDDDD' }}
        animate={{ fill: state ? '#FFDE4E' : '#DDDDDD' }}
        transition={{
          duration: 0.2,
          delay: 0,
          type: 'spring',
          stiffness: 120,
          damping: 20,
        }}
      />
    </Svg>
  );
};
export default Check;
