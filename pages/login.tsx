import React, { useState } from 'react';

import type { NextPage } from 'next';

import { AuthLayout } from '../components';

const Login: NextPage = () => {
  const [state, setState] = useState(0);
  setTimeout(() => setState((prev) => prev + 1), 1000);
  return <AuthLayout className="">{state}</AuthLayout>;
};
export default Login;
