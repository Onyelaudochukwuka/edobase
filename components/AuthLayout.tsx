import React, { FC } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Home } from '../assets';

import { AuthSidebar } from '.';

export interface IAuthLayoutProps {
  children: React.ReactNode
  className: string
  nosidebar?: boolean
}

const AuthLayout: FC<IAuthLayoutProps> = ({
  children,
  className,
  nosidebar,
  ...props
}) => {
  const { section: Section } = motion;
  return (
    <Section
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        type: 'spring',
        stiffness: 120,
        damping: 20,
      }}
      className="flex min-h-screen"
    >
      <AuthSidebar
        className={`basis-5/12 ${
          nosidebar ?? false ? 'hidden' : 'lg:grid hidden place-items-center'
        }`}
      />
      <div
        className={`${className} ${
          nosidebar ?? false ? 'basis-full' : 'lg:basis-7/12'
        } w-full py-6 px-12 flex flex-col justify-between`}
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
    </Section>
  );
};
AuthLayout.defaultProps = {
  nosidebar: false,
};
export default AuthLayout;
