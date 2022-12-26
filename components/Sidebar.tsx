import React, { FC } from 'react';

import Link from 'next/link';

import { Ad } from './atoms';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISidebarProps {
  className: string
}

const Sidebar: FC<ISidebarProps> = ({ className }) => {
  const ads = Array.from({ length: 5 }, (_, i) => i);
  return (
    <div className={`${className} flex flex-col gap-6 p-6`}>
      <button
        type="button"
        className="px-6 w-fit py-2 bg-action mx-auto hover:bg-basic text-white rounded-full transition-colors duration-500 ease-in"
      >
        <Link href="/create-post">
          Create Post
        </Link>
      </button>
      {ads.map((value) => (
        <Ad key={value} />
      ))}
    </div>
  );
};
export default Sidebar;
