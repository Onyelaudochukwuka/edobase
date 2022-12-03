import React, { useState } from 'react';

import type { NextPage } from 'next';
import Link from 'next/link';

import { AuthLayout, PlaceholderInput } from '../components';

const Login: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <AuthLayout className="">
      <div>
        <span className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Hello Again</h1>
          <p className="text-lg font-medium text-action">
            Welcome back! please enter your details
          </p>
        </span>
        <form className="flex flex-col gap-4 mt-8">
          <div className="flex flex-col gap-2">
            <PlaceholderInput
              {...{
                type: 'email',
                placeholder: 'Email',
                name: 'email',
                state: email,
                setState: setEmail,
              }}
            />
            <PlaceholderInput
              {...{
                type: 'password',
                placeholder: 'Password',
                name: 'password',
                state: password,
                setState: setPassword,
              }}
            />
          </div>
          <div>
            <div>
              <label htmlFor="remember">
                <input type="checkbox" name="remember" id="remember" />
                Remember me
              </label>
            </div>
            <Link href="/forgot-password">
              <span>Forgot password?</span>
            </Link>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};
export default Login;
