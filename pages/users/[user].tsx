import React from 'react';

import type { NextPage } from 'next';
import Image from 'next/image';

import { Layout } from '../../components';
import img1 from '../../public/image1.png';

export interface IUserProps {
  user: string
}

// eslint-disable-next-line react/prop-types
const User: NextPage<IUserProps> = ({ user }) => {
  return (
    <Layout className="flex gap-6  flex-col  bg-white mx-auto my-6 w-11/12">
      <div>
        <span className="w-12 h-12">
          <Image src={img1} alt={user} width={50} height={50} />
        </span>
        <div>
          <span>{user}</span>
          <span>Male</span>
        </div>
      </div>
      <div>
        <span>
          {' '}
          18 years old | Full Stack Developer | Open source enthusiast | UI
          designer | follow for consistency and productivity tips.
        </span>
      </div>
    </Layout>
  );
};
User.getInitialProps = async ({ query }: any) => {
  const { user } = query as { user: string };
  return { user };
};
export default User;
