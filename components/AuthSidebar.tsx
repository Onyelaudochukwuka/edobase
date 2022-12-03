import React, { FC } from 'react';

import { AuthBlur } from '../assets';

export interface IAuthSidebarProps {
  className: string
}

const AuthSidebar: FC<IAuthSidebarProps> = ({ className, ...props }) => (
  <section
    className={`${className} gradient grid place-items-center`}
    {...props}
  >
    <div className="gradient-child w-3/4 h-1/2 p-4">df</div>
    <AuthBlur className="absolute bottom-0 left-0" />
  </section>
);

export default AuthSidebar;
