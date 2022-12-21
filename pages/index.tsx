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
            'https://theconnectedawards.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages2.3dc3c583.png&w=1920&q=75',
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
