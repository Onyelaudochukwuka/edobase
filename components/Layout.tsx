import React, { FC, ReactNode } from 'react';

import Link from 'next/link';

import { Add } from '../assets';

import { Footer, Navbar, Sidebar } from '.';

interface IAppProps {
  children: ReactNode
  className: string
  hide?: boolean
}

const App: FC<IAppProps> = ({ children, className, hide }) => (
  <section className="layout">
    <Navbar className="navbar" />
    <main className={`${className} main`}>{children}</main>
    <Sidebar className="sidebar" />
    <Footer className="footer" />
    {(hide ?? false) && (
      <button className="fixed bottom-10 right-10 z-50 lg:hidden" type="button">
        <Link href="/create-post">
          <Add className="w-16 h-16" />
        </Link>
      </button>
    )}
  </section>
);

App.defaultProps = {
  hide: false,
};

export default App;
