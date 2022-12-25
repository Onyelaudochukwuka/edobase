import React from 'react';

import type { NextPage } from 'next';
import Image from 'next/image';

import { Ad, Layout, PostCard } from '../../components';
import { IPostCardProps } from '../../components/atoms/PostCard';
import img1 from '../../public/image1.png';

export interface IUserProps {
  user: string
}

// eslint-disable-next-line react/prop-types
const User: NextPage<IUserProps> = ({ user }) => {
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
    <Layout className="flex gap-6 flex-col bg-white mx-auto my-6 w-11/12 p-6 rounded-md shadow-2xl shadow-black/5">
      <div className="flex gap-2 items-center">
        <span>
          <Image
            src={img1}
            alt={user}
            width={75}
            height={75}
            className="rounded-full h-[75px]"
          />
        </span>
        <div className="flex flex-col gap-2">
          <span>{user}</span>
          <span>Male</span>
        </div>
      </div>
      <div className="border-b-2 border-b-gray pb-5">
        <span>
          {' '}
          18 years old | Full Stack Developer | Open source enthusiast | UI
          designer | follow for consistency and productivity tips.
        </span>
      </div>
      <p>Last Seen: 10:30PM</p>
      <div className="flex flex-col">
        <h3 className="text-xl font-bold">Recent Posts</h3>
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
User.getInitialProps = async ({ query }: any) => {
  const { user } = query as { user: string };
  return { user };
};
export default User;
