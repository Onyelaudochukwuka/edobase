import React from 'react';

import type { NextPage } from 'next';

import { HomeCard, Layout } from '../components';

const Home: NextPage = () => {
  return (
    <Layout className="">
      {[
        {
          title: 'title',
          description: 'description',
          image:
            '/image1.png',
          comments: 12,
          topic: 'topic',
          uuid: 'uuid',
        },
      ].map((value) => (
        <HomeCard {...value} />
      ))}
    </Layout>
  );
};

export default Home;
