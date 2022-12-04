import React, { useRef, useState } from 'react';

import type { NextPage } from 'next';
import Link from 'next/link';

import { AuthLayout, PlaceholderInput } from '../components';

const Login: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const remember = useRef<HTMLInputElement>(null);
  return (
    <AuthLayout className="">
      <div className="flex flex-col gap-6">
        <span className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Hello Again</h1>
          <p className="lg:text-lg md:text-base text-sm font-medium text-action">
            Welcome back! please enter your details
          </p>
        </span>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
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
          <div className="flex justify-between lg:text-base md:text-sm text-xs">
            <div>
              <label htmlFor="remember" className="flex gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-checked"
                  ref={remember}
                  id="remember"
                />
                Remember me
              </label>
            </div>
            <Link href="/forgot-password">
              <span className="text-action font-semibold">
                Forgot password?
              </span>
            </Link>
          </div>
          <button type="submit" className="auth-btn py-4 text-white font-black">
            Login
          </button>
        </form>
        <p className="text-center font-bold mt-4 lg:text-base md:text-sm text-xs">
          Don’t have an account?
          {' '}
          <Link href="/signup">
            <span className="text-action"> Sign up for free</span>
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};
export default Login;
