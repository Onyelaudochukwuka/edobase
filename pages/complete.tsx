/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { FormEvent, useEffect, useState } from 'react';

import { AuthLayout, PlaceholderInput } from '../components';
import { SelectInput } from '../components/atoms';
import {
  hasMinimumLength, hasNumber, setWithExpiry, usePostCompleteMutation,
} from '../utils';

interface ICommonProps {
  query: string
}
// eslint-disable-next-line react/prop-types
const Complete = ({ query }: ICommonProps): any => {
  const [userName, setUserName] = useState('');
  const [gender, setGender] = useState('');
  const [lga, setLga] = useState('');
  const [phone, setPhone] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [complete] = usePostCompleteMutation();
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (disabled) {
      setDisabled(true);
    } else {
      complete({
        username: userName,
        phone,
        gender,
        LGA: lga,
        client_id: query,
      }).unwrap().then((res) => {
        if (res.token) {
          setWithExpiry('token', res.token, 1000 * 60 * 60 * 24 * 30);
        }
      }).catch((err) => {
        console.log(err);
      });
    }
  };
  useEffect(() => {
    setDisabled(
      !(
        hasMinimumLength(phone, 10)
        && hasNumber(phone)
        && hasMinimumLength(lga, 2)
        && hasMinimumLength(userName, 2)
        && hasMinimumLength(gender, 2)
      ),
    );
  }, [userName, gender, lga, phone]);
  return (
    <AuthLayout className="">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Complete Sign Up</h1>
          <p className="lg:text-lg md:text-base text-sm font-medium text-action">
            Enter the fields below complete sign up
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <PlaceholderInput
              {...{
                type: 'text',
                placeholder: 'Username',
                state: userName,
                setState: setUserName,
                inputMode: 'text',
              }}
            />
            <PlaceholderInput
              {...{
                type: 'text',
                placeholder: 'LGA',
                state: lga,
                setState: setLga,
                inputMode: 'text',
              }}
            />
            <PlaceholderInput
              {...{
                type: 'text',
                placeholder: 'Phone',
                state: phone,
                setState: setPhone,
                inputMode: 'tel',
              }}
            />
            <SelectInput
              {...{
                values: ['Male', 'Female', 'Other'],
                state: gender,
                setState: setGender,
                placeholder: 'Gender',
              }}
            />
          </div>
          <button
            type="submit"
            className={`auth-btn py-4 text-white font-black ${
              disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
            }`}
          >
            Complete
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};
Complete.getInitialProps = async (ctx: { query: { client_id: any } }) => {
  return {
    query: ctx.query.client_id,
  };
};
export default Complete;
