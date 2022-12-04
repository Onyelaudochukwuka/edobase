import React, { useState } from 'react';

import type { NextPage } from 'next';

import { AuthLayout, PlaceholderInput } from '../components';
import Link from 'next/link';

const SignUp: NextPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passChecks = [];
  return (
    <AuthLayout className="">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold">Create an account</h1>
          <p className="text-lg font-medium text-action">
            Enter the fields below to get started
          </p>
        </div>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <PlaceholderInput
              {...{
                type: 'text',
                placeholder: 'Full name',
                state: name,
                setState: setName,
              }}
            />
            <PlaceholderInput
              {...{
                type: 'email',
                placeholder: 'Email',
                state: email,
                setState: setEmail,
              }}
            />
            <PlaceholderInput
              {...{
                type: 'password',
                placeholder: 'Password',
                state: password,
                setState: setPassword,
              }}
            />
          </div>
          <div></div>
          <button type="submit" className="auth-btn py-4 text-white font-black">
            Sign up
          </button>
        </form>
        <p className="text-center font-bold mt-4">
          Already have an account?
          {' '}
          <Link href="/login">
            <span className="text-action"> Login</span>
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
