/* eslint-disable no-console */
import React, { useState } from 'react';

import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { AuthLayout, PlaceholderInput } from '../components';
import {
  hasLowercase,
  hasMinimumLength,
  hasSpecialCharacter,
  hasUppercase,
  isEmail,
  setWithExpiry,
  usePostLoginMutation,
} from '../utils';

const Login: NextPage = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState(false);
  const [login] = usePostLoginMutation();
  const { push } = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (
      !(
        isEmail(email)
        && hasMinimumLength(password, 8)
        && hasLowercase(password)
        && hasUppercase(password)
        && hasSpecialCharacter(password)
      )
    ) {
      if (!isEmail(email)) {
        setEmailError(true);
      } else {
        setPasswordError(true);
      }
    } else {
      setEmailError(false);
      setPasswordError(false);
      login({
        email,
        password,
      })
        .unwrap()
        .then((res) => {
          console.log(res);
          if (res.error) {
            setError(true);
          } else {
            setWithExpiry('token', res.token, 1000 * 60 * 60 * 24 * 7);
            push('/')
              .then(() => ({}))
              .catch((err) => console.error(err));
          }
        })
        .catch((err: any) => {
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          if (err.data.error) {
            setError(true);
          }
        });
    }
  };
  return (
    <AuthLayout className="">
      <div className="flex flex-col gap-6">
        <span className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Hello Again</h1>
          <p className="lg:text-lg md:text-base text-sm font-medium text-action">
            Welcome back! please enter your details
          </p>
        </span>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <PlaceholderInput
              {...{
                type: 'email',
                placeholder: 'Email',
                state: email,
                setState: setEmail,
                inputMode: 'email',
                error: emailError,
                errorMessage: 'Please enter a valid email',
              }}
            />
            <PlaceholderInput
              {...{
                type: 'password',
                placeholder: 'Password',
                state: password,
                setState: setPassword,
                inputMode: 'text',
                error: passwordError,
                errorMessage:
                  'Password must be alphanumeric containing a symbol, a capital letter and be at least 8 characters long',
              }}
            />
            {
              error && (
                <p className="text-red-500 text-sm font-bold text-center">
                  Invalid email or password
                </p>
              )
            }
          </div>
          <div className="float-right ml-auto lg:text-base md:text-sm text-xs">
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
