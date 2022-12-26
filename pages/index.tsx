import React from 'react';

import type { NextPage } from 'next';

import { Ad, HomeCard, Layout } from '../components';
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
    <Layout className="flex gap-6 p-6 flex-col w-full">
      {posts.map((value, i) => ((i + 1) % 5 === 0 && i !== 0 ? (
        <React.Fragment key={value.uuid}>
          <HomeCard {...value} />
          <Ad />
        </React.Fragment>
      )
        : (
          <HomeCard key={value.uuid} {...value} />
        )
      ))}
    </Layout>
  );
};

export default Home;
