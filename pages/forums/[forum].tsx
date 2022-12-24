import React from 'react';

import type { NextPage } from 'next';

import { Ad, Layout, PostCard } from '../../components';
import { IPostCardProps } from '../../components/atoms/PostCard';

interface IForumProps {
  forum: string
}

// eslint-disable-next-line react/prop-types
const Forum: NextPage<IForumProps> = ({ forum }) => {
  const posts: IPostCardProps[] = Array.from({ length: 10 }, (_, i) => ({
    comments: 10 * (10 - i),
    gender: 'M',
    time: Date.now(),
    title: 'Core 77 Conference',
    views: 10 * i,
    uuid: `uuid${i}`,
    author: `author-${i}`,
  }));
  return (
    <Layout className="p-6 w-full">
      <div className="flex gap-4 flex-col">
        <h1 className="text-3xl">{`Forums/${forum}`}</h1>
        <div className="flex gap-6 py-6 flex-col w-full">
          {posts.map((value, i) => ((i + 1) % 5 === 0 && i !== 0 ? (
            <>
              <PostCard key={value.uuid} {...value} />
              <Ad />
            </>
          ) : (
            <PostCard key={value.uuid} {...value} />
          )))}
        </div>
      </div>
    </Layout>
  );
};
Forum.getInitialProps = async ({ query }: any) => {
  const { forum } = query as { forum: string };
  return { forum };
};
export default Forum;
