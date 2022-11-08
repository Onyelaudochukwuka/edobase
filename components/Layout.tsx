import React, { FC } from 'react';
import { Footer, Navbar } from ".";

interface IAppProps {
}

const App: FC<IAppProps> = (children) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
  );
};

export default App;
