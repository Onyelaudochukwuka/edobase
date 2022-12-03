import React, { FC } from 'react';

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
  <section className="flex">
    <AuthSidebar />
    <div className={className} {...props}>
      {children}
    </div>
  </section>
);

export default AuthLayout;
