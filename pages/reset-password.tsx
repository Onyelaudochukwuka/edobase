/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { FormEvent, useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { AuthLayout, PlaceholderInput } from '../components';
import {
  hasLowercase,
  hasMinimumLength, hasNumber, hasSpecialCharacter, usePostRestPasswordMutation,
} from '../utils';

interface IResetProps {
  query: string
}
// eslint-disable-next-line react/prop-types
const ResetPassword = ({ query }: IResetProps): any => {
  console.log(query);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [reset] = usePostRestPasswordMutation();
  const { push } = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (disabled) {
      setDisabled(true);
    } else {
      reset({
        client_id: query,
        password,
      }).unwrap()
        .then((res) => {
          console.log(res);
          if (res.error) {
            setError(true);
            setErrorMessage(res.message);
          } else {
            push('/login').then(() => ({})).catch((err) => console.error(err));
          }
        })
        .catch((err) => {
          console.log(err);
          if (err.data.error) {
            setError(true);
            setErrorMessage(err.data.message);
          }
        });
    }
  };
  useEffect(() => {
    setDisabled(
      !(
        hasMinimumLength(password, 8)
        && hasMinimumLength(confirmPassword, 8)
        && password === confirmPassword
        && hasNumber(password)
        && hasLowercase(password)
        && hasSpecialCharacter(password)
      ),
    );
  }, [password, confirmPassword]);
  return (
    <AuthLayout className="">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Reset Password</h1>
          <p className="lg:text-lg md:text-base text-sm font-medium text-action">
            Enter the fields below to reset your password
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <PlaceholderInput
              {...{
                type: 'password',
                placeholder: 'Password',
                state: password,
                setState: setPassword,
                inputMode: 'text',
              }}
            />
            <PlaceholderInput
              {...{
                type: 'password',
                placeholder: 'Confirm Password',
                state: confirmPassword,
                setState: setConfirmPassword,
                inputMode: 'text',
              }}
            />
            {
              error && (
                <div className="text-red-500 text-sm font-bold text-center">
                  {errorMessage}
                </div>
              )
            }
          </div>
          <button
            type="submit"
            className={`auth-btn py-4 text-white font-black ${
              disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
            }`}
            disabled={disabled}
          >
            Reset Password
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};
ResetPassword.getInitialProps = async (ctx: { query: { client_id: any } }) => {
  return {
    query: ctx.query.client_id,
  };
};
export default ResetPassword;
