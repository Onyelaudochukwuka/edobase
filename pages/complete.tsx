import React, { FormEvent, useState } from 'react';

import { AuthLayout, PlaceholderInput } from '../components';

interface ICommonProps {
  query: string
}
// eslint-disable-next-line react/prop-types
const Complete = ({ query }: ICommonProps): any => {
  const [userName, setUserName] = useState('');
  // const [gender, setGender] = useState('');
  const [lga, setLga] = useState('');
  const [phone, setPhone] = useState('');
  // eslint-disable-next-line no-console
  console.log(query);
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
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
                placeholder: 'Username',
                state: userName,
                setState: setUserName,
              }}
            />
            <PlaceholderInput
              {...{
                type: 'text',
                placeholder: 'LGA',
                state: lga,
                setState: setLga,
              }}
            />
            <PlaceholderInput
              {...{
                type: 'text',
                placeholder: 'Phone',
                state: phone,
                setState: setPhone,
              }}
            />
          </div>
          <button
            type="submit"
            className={`auth-btn py-4 text-white font-black ${
              false ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
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
