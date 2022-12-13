import React, { FC } from 'react';

import { Footer, Navbar, Sidebar } from '.';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IAppProps {}

const App: FC<IAppProps> = (children) => (
  <section>
    <Navbar />
    <div>{children}</div>
    <Sidebar />
    <Footer />
  </section>
);

export default App;
