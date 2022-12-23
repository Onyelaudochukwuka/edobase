import React from 'react';

import type { NextPage } from 'next';

import { HomeCard, Layout } from '../components';

const Home: NextPage = () => {
  const posts = Array.from({ length: 5 }, () => ({
    title: 'Creative Mornings',
    image: '/image1.png',
    comments: 12,
    topic: 'topic',
    uuid: 'uuid',
  }));
  return (
    <Layout className="flex gap-6 py-6 flex-col">
      {posts.map((value) => (
        <HomeCard key={value.uuid} {...value} />
      ))}
    </Layout>
  );
};

export default Home;
