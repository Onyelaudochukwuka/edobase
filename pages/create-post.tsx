/* eslint-disable no-multi-assign */
/* eslint-disable no-plusplus */
import React, { useState } from 'react';

import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(
  async () => import('../components/Editor'),
  { ssr: false, loading: () => <p>Loading...</p> },
);

const CreatePost: NextPage = () => {
  const [value, setValue] = useState('');
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(value));
  return (
    <section className="min-h-screen flex">
      <div className="flex flex-col gap-4 w-11/12 m-auto h-fit my-4 bg-white p-4">
        <h2 className="text-2xl font-semibold">Create Post</h2>
        <h3 className="text-lg font-semibold">Topic: Politics</h3>
        <DynamicComponentWithNoSSR {...{ value, setValue }} />
        <div className="flex gap-4 w-fit mx-auto">
          <button
            type="button"
            className="px-6 w-fit py-2 bg-action hover:bg-basic text-white rounded-full transition-colors duration-500 ease-in"
          >
            Preview
          </button>
          <button
            type="button"
            className="px-6 w-fit py-2 bg-basic hover:bg-action text-white rounded-full transition-colors duration-500 ease-in"
          >
            Post
          </button>
        </div>
      </div>
    </section>
  );
};
export default CreatePost;
