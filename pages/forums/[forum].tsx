import React from 'react';

import type { NextPage } from 'next';

import { Layout } from '../../components';

export interface IForumProps {
  forum: string
}

const Forum: NextPage<IForumProps> = ({ forum }) => {
  return (
    <Layout className="">
      <div className="flex">
        <h1 className="text-xl">{`Forums/${forum}`}</h1>
        <span className="text-lg">Create A topic</span>
      </div>
    </Layout>
  );
};
Forum.getInitialProps = async ({ query }: any) => {
  const { forum } = query;
  return { forum };
};
export default Forum;
