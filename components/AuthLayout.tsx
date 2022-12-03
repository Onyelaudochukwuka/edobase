import React, { FC } from 'react';

import { Home } from '../assets';

import { AuthSidebar } from '.';

export interface IAuthLayoutProps {
  children: React.ReactNode
  className: string
}

const AuthLayout: FC<IAuthLayoutProps> = ({
  children,
  className,
  ...props
}) => (
  <section className="flex min-h-screen">
    <AuthSidebar className="basis-1/3" />
    <div className={`${className} basis-2/3`} {...props}>
      <Home />
      {children}
    </div>
  </section>
);

export default AuthLayout;
