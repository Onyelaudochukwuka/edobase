import React, { useId, useState } from 'react';

import type { NextPage } from 'next';

import { AuthLayout, PlaceholderInput } from '../../components';

interface ConfirmEmailProps {
  client_id: string
  slug: string
}
// eslint-disable-next-line react/prop-types
const ConfirmEmail: NextPage<ConfirmEmailProps> = ({ slug, client_id }) => {
  // eslint-disable-next-line no-console
  console.log(client_id, slug);
  const [userName, setUserName] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<number>();
  const [lga, setLga] = useState<string>('');
  const id = useId();
  // eslint-disable-next-line no-console
  console.log(gender);
  return (
    <AuthLayout nosidebar className="">
      <div className="flex flex-col gap-6 lg:w-1/2 w-full m-auto items-center">
        <span className="flex flex-col gap-8 items-center">
          {/* <Key /> */}
          <h1 className="text-3xl font-bold">Welcome to Edobase</h1>
          <p className="text-placeholder font-bold lg:text-lg md:text-base text-sm">
            Please fill in the form below to complete account creation
          </p>
        </span>
        <form className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-6">
            <PlaceholderInput<string>
              {...{
                type: 'text',
                placeholder: 'Username',
                state: userName,
                setState: setUserName,
              }}
            />
            <PlaceholderInput<number | undefined>
              {...{
                type: 'tel',
                placeholder: 'Phone Number',
                state: phoneNumber,
                setState: setPhoneNumber,
              }}
            />
            <PlaceholderInput<string>
              {...{
                type: 'text',
                placeholder: 'LGA of residence',
                state: lga,
                setState: setLga,
              }}
            />
          </div>
          <div className="flex w-full justify-around">
            <label htmlFor={`${id}Male`} className="flex gap-2">
              <input
                value="Male"
                type="radio"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
                id={`${id}Male`}
              />
              Male
            </label>
            <label htmlFor={`${id}Female`} className="flex gap-2">
              <input
                value="Female"
                type="radio"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
                id={`${id}Female`}
              />
              Female
            </label>
          </div>
          <button type="submit" className="auth-btn py-4 text-white font-black">
            Submit
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};
ConfirmEmail.getInitialProps = ({ query }) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { slug, client_id } = query as { client_id: string, slug: string };
  return { slug, client_id };
};
export default ConfirmEmail;
