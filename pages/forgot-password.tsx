import React, { useState } from 'react';

import type { NextPage } from 'next';

import { Key } from '../assets';
import { AuthLayout, PlaceholderInput } from '../components';

const Forgotpassword: NextPage = () => {
  const [email, setEmail] = useState('');
  return (
    <AuthLayout nosidebar className="">
      <div className="flex flex-col gap-6 w-1/2 m-auto items-center">
        <span className="flex flex-col gap-4 items-center">
          <Key />
          <h1 className="text-3xl font-bold">Forgot Password</h1>
          <p>No worries, we’ll send you reset instructions</p>
        </span>
        <form className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-6">
            <PlaceholderInput
              {...{
                type: 'email',
                placeholder: 'Email',
                state: email,
                setState: setEmail,
              }}
            />
          </div>
          <button type="submit" className="auth-btn py-4 text-white font-black">
            Reset Password
          </button>
        </form>
        <div>
          <p>Back to Log In</p>
        </div>
      </div>
    </AuthLayout>
  );
};
export default Forgotpassword;
