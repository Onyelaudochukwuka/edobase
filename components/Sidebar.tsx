import React, { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISidebarProps {
  className: string
}

const Sidebar: FC<ISidebarProps> = ({ className }) => {
  const ads = Array.from({ length: 5 }, (_, i) => i);
  return (
    <div className={`${className} flex flex-col gap-6 my-6`}>
      {ads.map((value) => (
        <div key={value} className="flex flex-col gap-2 w-56 h-56 items-center justify-center bg-white">
          Ads
        </div>
      ))}
    </div>
  );
};
export default Sidebar;
