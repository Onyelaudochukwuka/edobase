import React, { useState } from 'react';

import type { NextPage } from 'next';

import { AuthLayout } from '../components';

const Forgotpassword: NextPage = () => {
  const [email, setEmail] = useState('');
  return (
    <AuthLayout nosidebar className="">
      <div className="flex flex-col gap-6 w-1/2 m-auto items-center">
        <span className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Forgot Password</h1>
        </span>
      </div>
    </AuthLayout>
  );
};
export default Forgotpassword;
