import React from 'react';

import type { NextPage } from 'next';

import { Layout } from '../../components';

export interface IuserProps {
  slug: string
}

const user: NextPage<IuserProps> = ({ slug }) => {
  return (
    <Layout className="">
      user
    </Layout>
  );
};
user.getInitialProps = async ({ query }: any) => {
  const { slug } = query;
  return { slug };
};
export default user;
