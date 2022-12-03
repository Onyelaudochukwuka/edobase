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
    <AuthSidebar className="basis-5/12" />
    <div className={`${className} basis-7/12 p-6 flex flex-col justify-between`} {...props}>
      <Home />
      {children}
      <div className="flex justify-between">
        <span>&copy;2022 edobase</span>
        <span>privacy policy</span>
      </div>
    </div>
  </section>
);

export default AuthLayout;
