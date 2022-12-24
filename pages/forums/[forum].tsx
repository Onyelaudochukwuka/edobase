import React from 'react';

import type { NextPage } from 'next';

import { Layout, PostCard } from '../../components';
import { IPostCardProps } from '../../components/atoms/PostCard';

interface IForumProps {
  forum: string
}

// eslint-disable-next-line react/prop-types
const Forum: NextPage<IForumProps> = ({ forum }) => {
  const posts: IPostCardProps[] = Array.from({ length: 10 }, () => ({
      comments: 0,
      gender: 'M',
      time: Date.now(),
      title: 'Post 1',
      views: 10,
    }));
  return (
    <Layout className="p-6 w-full">
      <div className="flex gap-4">
        <h1 className="text-3xl">{`Forums/${forum}`}</h1>
        {
          posts.map((value) => <PostCard {...value} />)
        }
      </div>
    </Layout>
  );
};
Forum.getInitialProps = async ({ query }: any) => {
  const { forum } = query as { forum: string };
  return { forum };
};
export default Forum;
