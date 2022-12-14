import React, { FC, ReactNode } from 'react';

import { Footer, Navbar, Sidebar } from '.';

interface IAppProps {
  children: ReactNode
}

const App: FC<IAppProps> = ({ children }) => (
  <section className="layout">
    <Navbar className="navbar" />
    <div>{children}</div>
    <Sidebar className="sidebar" />
    <Footer className="footer" />
  </section>
);

export default App;
