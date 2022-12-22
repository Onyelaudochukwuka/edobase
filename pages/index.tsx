import React from 'react';

import type { NextPage } from 'next';

import { HomeCard, Layout } from '../components';

const Home: NextPage = () => {
  return (
    <Layout className="">
      {[
        {
          title: 'Creative Mornings',
          image: '/image1.png',
          comments: 12,
          topic: 'topic',
          uuid: 'uuid',
        },
      ].map((value) => (
        <HomeCard key={value.uuid} {...value} />
      ))}
    </Layout>
  );
};

export default Home;
