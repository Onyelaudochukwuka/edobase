import React, { FC } from 'react';

import Link from 'next/link';

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
    <div
      className={`${className} lg:basis-7/12 w-full py-6 px-12 flex flex-col justify-between`}
      {...props}
    >
      <Link href="/">
        <Home />
      </Link>
      {children}
      <div className="flex justify-between">
        <span>&copy;2022 edobase</span>
        <span>privacy policy</span>
      </div>
    </div>
  </section>
);

export default AuthLayout;
