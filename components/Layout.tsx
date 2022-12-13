import React, { FC, ReactNode } from 'react';

import { Footer, Navbar, Sidebar } from '.';

interface IAppProps {
  children: ReactNode
}

const App: FC<IAppProps> = ({ children }) => (
  <section className="layout">
    <Navbar className="Navbar" />
    <div>{children}</div>
    <Sidebar className="Sidebar" />
    <Footer className="Footer" />
  </section>
);

export default App;
