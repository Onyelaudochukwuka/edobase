/* eslint-disable no-console */
import React, { FormEvent, useEffect, useState } from 'react';

import type { NextPage } from 'next';
import Link from 'next/link';

import { Check } from '../assets';
import { AuthLayout, PlaceholderInput, PopUp } from '../components';
import {
  hasLowercase,
  hasMinimumLength,
  hasNumber,
  hasSpecialCharacter,
  hasUppercase,
  isEmail,
  usePostSignUpMutation,
} from '../utils';

const SignUp: NextPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [signup] = usePostSignUpMutation();
  const [show, setShow] = useState(false);
  const passChecks = [
    {
      text: 'one lowercase character',
      state: hasLowercase(password),
    },
    {
      text: 'one uppercase character',
      state: hasUppercase(password),
    },
    {
      text: 'at least 8 characters',
      state: hasMinimumLength(password, 8),
    },
    {
      text: 'one number',
      state: hasNumber(password),
    },
    {
      text: 'one special character',
      state: hasSpecialCharacter(password),
    },
  ];
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (disabled) {
      setDisabled(true);
    } else {
      // // eslint-disable-next-line no-console
      // push('/confirm-email/iddd?client_id=123')
      //   .then(() => ({}))
      //   // eslint-disable-next-line no-console
      //   .catch((err) => console.error(err));
      signup({
        name,
        email,
        password,
      }).then(() => {
        setShow(true);
      }).catch((err) => {
        console.log(err);
      });
    }
  };
  useEffect(() => {
    setDisabled(
      !(
        hasLowercase(password)
        && hasUppercase(password)
        && hasMinimumLength(password, 8)
        && hasNumber(password)
        && hasSpecialCharacter(password)
        && isEmail(email)
        && hasMinimumLength(name, 4)
      ),
    );
  }, [password, email, name]);
  return (
    <>
      <PopUp show={show} />
      <AuthLayout className="">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="lg:text-lg md:text-base text-sm font-medium text-action">
              Enter the fields below to get started
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <PlaceholderInput
                {...{
                  type: 'text',
                  placeholder: 'Full name',
                  state: name,
                  setState: setName,
                  inputMode: 'text',
                }}
              />
              <PlaceholderInput
                {...{
                  type: 'email',
                  placeholder: 'Email',
                  state: email,
                  setState: setEmail,
                  inputMode: 'email',
                }}
              />
              <PlaceholderInput
                {...{
                  type: 'password',
                  placeholder: 'Password',
                  state: password,
                  setState: setPassword,
                  inputMode: 'text',
                }}
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-4">
              {passChecks.map(({ text, state }) => (
                <div
                  key={text}
                  className="flex gap-2 items-center lg:text-base md:text-sm text-xs"
                >
                  <Check state={state} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <button
              type="submit"
              className={`auth-btn py-4 text-white font-black ${
                disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
              }`}
              disabled={disabled}
            >
              Sign up
            </button>
          </form>
          <p className="text-center font-bold mt-4 lg:text-base md:text-sm text-xs">
            Already have an account?
            {' '}
            <Link href="/login">
              <span className="text-action"> Login</span>
            </Link>
          </p>
        </div>
      </AuthLayout>
    </>
  );
};

export default SignUp;
