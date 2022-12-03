import React, { FC } from 'react';

import { AuthBlur, AuthPointer } from '../assets';

export interface IAuthSidebarProps {
  className: string
}

const AuthSidebar: FC<IAuthSidebarProps> = ({ className, ...props }) => (
  <section
    className={`${className} gradient grid place-items-center`}
    {...props}
  >
    <div className="gradient-child w-3/4 h-1/2 p-2 z-20">
      <div className="flex items-center">
        <AuthPointer className="w-20" />
        <span className="text-5xl text-white font-black">Edobase</span>
      </div>
      <p>
        Platform for getting the latest
        {' '}
        <span className="text-loginHighlight">information.</span>
      </p>
    </div>
    <AuthBlur className="absolute bottom-0 left-0" />
  </section>
);

export default AuthSidebar;
