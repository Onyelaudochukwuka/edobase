import React from 'react';

import '../styles/globals.css';
import 'react-quill/dist/quill.snow.css';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps): any => (
  <Component {...pageProps} />
);

export default MyApp;
