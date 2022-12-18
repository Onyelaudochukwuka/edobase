import React, { FC, ReactNode } from 'react';

import { Footer, Navbar, Sidebar } from '.';

interface IAppProps {
  children: ReactNode
  className: string
}

const App: FC<IAppProps> = ({ children, className }) => (
  <section className="layout">
    <Navbar className="navbar" />
    <main className={`${className} main`}>
      {children}
    </main>
    <Sidebar className="sidebar" />
    <Footer className="footer" />
  </section>
);

export default App;
