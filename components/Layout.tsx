import React, { FC, ReactNode } from 'react';

import { Footer, Navbar, Sidebar } from '.';

interface IAppProps {
  children: ReactNode;
}

const App: FC<IAppProps> = (children) => (
  <section>
    <Navbar />
    <div>{children}</div>
    <Sidebar />
    <Footer />
  </section>
);

export default App;
