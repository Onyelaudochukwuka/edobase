import React, { FC } from 'react';

import { Footer, Navbar, Sidebar } from '.';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IAppProps {}

const App: FC<IAppProps> = (children) => (
  <>
    <Navbar />
    {children}
    <Sidebar />
    <Footer />
  </>
);

export default App;
