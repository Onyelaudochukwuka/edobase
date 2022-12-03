import React, { useState } from 'react';

import type { NextPage } from 'next';
import Link from 'next/link';

import { AuthLayout } from '../components';

const Login: NextPage = () => {
  const [state, setState] = useState(0);
  setTimeout(() => setState((prev) => prev + 1), 1000);
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
            <input
              type="email"
              name="email"
              className="border-b-2 outline-none focus:outline-none "
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              className="border-b-2 outline-none focus:outline-none"
              placeholder="Email"
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
