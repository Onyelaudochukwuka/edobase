import React, { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISideLinkProps {}

const SideLink: FC<ISideLinkProps> = () => {
  const ads = Array.from({ length: 5 }, (_, i) => i);
  return (
    <div className="flex flex-col gap-6">
      { ads.map((value) => (
        <div key={value} className="flex flex-col gap-2">
          Ads
        </div>
      ))}
    </div>

  );
};
export default SideLink;
