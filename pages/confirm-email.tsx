import React, { useState } from 'react';
import type { NextPage } from 'next';
import { AuthLayout, PlaceholderInput } from "../components";
import Link from "next/link";

const confirmEmail: NextPage = () => {
  const [email, setEmail] = useState('');
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
          </div>
          <button type="submit" className="auth-btn py-4 text-white font-black">
            Reset Password
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};
export default confirmEmail;
