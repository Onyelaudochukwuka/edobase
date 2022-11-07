import React, { FC } from 'react';

interface IAppProps {
}

const App: FC<IAppProps> = (children) => {
    return (
        <>
            {children}
        </>
  );
};

export default App;
