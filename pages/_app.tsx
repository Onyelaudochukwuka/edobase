import React from 'react';

import '../styles/globals.css';
import 'react-quill/dist/quill.snow.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import store from '../utils/services/store';

const MyApp = ({ Component, pageProps }: AppProps): any => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;
