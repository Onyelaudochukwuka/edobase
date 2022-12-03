import React, { FC } from 'react';

export interface IAuthSidebarProps {
  className: string
}

const AuthSidebar: FC<IAuthSidebarProps> = ({ className, ...props }) => (
  <section className={`${className} gradient`} {...props}>
    df
  </section>
)

export default AuthSidebar;
