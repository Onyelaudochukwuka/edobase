import React from 'react';

import type { NextPage } from 'next';

import { HomeCard, Layout } from '../components';
import img from '../public/image1.png';

const Home: NextPage = () => {
  const posts = Array.from({ length: 5 }, () => ({
    title: 'Creative Mornings',
    image: img,
    comments: 12,
    topic: 'topic',
    uuid: 'uuid',
  }));
  return (
    <Layout className="flex gap-6 py-6 flex-col w-full">
      {posts.map((value) => (
        <HomeCard key={value.uuid} {...value} />
      ))}
    </Layout>
  );
};

export default Home;
