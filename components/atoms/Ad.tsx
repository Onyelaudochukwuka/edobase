import React, { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IAdProps {
}

const Ad: FC<IAdProps> = () => {
  return (
    <div
      className="flex flex-col gap-2 w-full mx-auto h-56 items-center justify-center bg-white rounded-lg shadow-xl"
    >
      Ad
    </div>
  );
};
export default Ad;
