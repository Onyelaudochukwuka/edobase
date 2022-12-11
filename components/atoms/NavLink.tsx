import Link from "next/link";
import React, { FC, ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface INavLinkProps {
    to: string
    external?: boolean
    children: ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NavLinks: FC<INavLinkProps> = ({ to, external, children }) => <Link href={to}>{ children }</Link>;
export default NavLinks;
