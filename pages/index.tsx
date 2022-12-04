import React, { useEffect } from 'react';

import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const { push } = useRouter();
  useEffect(() => {
    push('/login')
      .then(() => ({}))
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  });
  return <>Div</>;
};

export default Home;
