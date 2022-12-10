import React, { useState } from 'react';

import type { NextPage } from 'next';

import { AuthLayout, PlaceholderInput } from '../../components';

interface ConfirmEmailProps {
  client_id: string
}
const ConfirmEmail: NextPage<ConfirmEmailProps> = ({ client_id }) => {
  // eslint-disable-next-line no-console
  console.log(client_id);
  const [email, setEmail] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<number>(0);
  const [lga, setLga] = useState<string>('');
  return (
    <AuthLayout nosidebar className="">
      <div className="flex flex-col gap-6 lg:w-1/2 w-full m-auto items-center">
        <span className="flex flex-col gap-8 items-center">
          {/* <Key /> */}
          <h1 className="text-3xl font-bold">Forgot Password</h1>
          <p className="text-placeholder font-bold lg:text-lg md:text-base text-sm">
            No worries, we’ll send you reset instructions
          </p>
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
          </div>
          <button type="submit" className="auth-btn py-4 text-white font-black">
            Reset Password
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};
ConfirmEmail.getInitialProps = ({ query }) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { client_id } = query as { client_id: string };
  return { client_id };
};
export default ConfirmEmail;
