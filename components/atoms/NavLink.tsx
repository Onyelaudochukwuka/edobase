import React, { FC, ReactNode } from 'react';

import Link from 'next/link';

export interface INavLinkProps {
  to: string
  external?: boolean
  children: ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NavLink: FC<INavLinkProps> = ({ to, external, children }) => (
  <Link href={to}>{children}</Link>
);
NavLink.defaultProps = {
  external: false,
};
export default NavLink;
