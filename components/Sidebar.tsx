import React, { FC } from 'react';

import { Ad } from './atoms';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISidebarProps {
  className: string
}

const Sidebar: FC<ISidebarProps> = ({ className }) => {
  const ads = Array.from({ length: 5 }, (_, i) => i);
  return (
    <div className={`${className} flex flex-col gap-6 m-6 `}>
      {ads.map((value) => (<Ad key={value} />))}
    </div>
  );
};
export default Sidebar;
