import React, { FC } from 'react';

import { Footer, Navbar } from '.';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IAppProps {}

const App: FC<IAppProps> = (children) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default App;
