/* eslint-disable no-multi-assign */
/* eslint-disable no-plusplus */
import React, { useState } from 'react';

import moment from 'moment';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import { Cancel } from '../assets';

const DynamicComponentWithNoSSR = dynamic(
  async () => import('../components/Editor'),
  { ssr: false, loading: () => <p>Loading...</p> },
);

const CreatePost: NextPage = () => {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(value));
  const [title, setTitle] = useState('');
  return (
    <>
      <section className="min-h-screen flex">
        <div className="flex flex-col gap-4 w-11/12 m-auto h-fit my-4 bg-white p-4">
          <Link href="/">
            <h1 className="text-center font-bold text-black text-xl">
              Edobase
            </h1>
          </Link>
          <h2 className="text-2xl font-semibold">Create Post</h2>
          <h3 className="text-lg font-semibold">Topic: Politics</h3>
          <div>
            <span>Title:</span>
            <input
              type="text"
              className="w-full p-2 border-2 border-basic rounded-md"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <DynamicComponentWithNoSSR {...{ value, setValue }} />
          <div className="flex gap-4 w-fit mx-auto">
            <button
              type="button"
              className="px-6 w-fit py-2 bg-action hover:bg-basic text-white rounded-full transition-colors duration-500 ease-in"
              onClick={() => setOpen(true)}
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
      {open && (
        <section className="fixed inset-0 flex items-center justify-center bg-black/20">
          <div className="bg-white p-4 flex flex-col gap-4 w-10/12">
            <div
              className="w-fit ml-auto cursor-pointer"
              onClick={() => setOpen(false)}
              onKeyDown={() => setOpen(false)}
              role="button"
              tabIndex={0}
            >
              <Cancel className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/image1.png"
                alt="image"
                width={25}
                height={25}
                className="rounded-full h-[25px]"
              />
              <span className="text-sm font-semibold">Author ( M )</span>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold text-center">{title}</h1>
              <div
                className="text-sm nest"
                dangerouslySetInnerHTML={{ __html: value }}
              />
              <div>
                <span className="text-xs font-semibold">
                  {moment(Date.now()).format('h:mm • MMMM Do,YYYY')}
                </span>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default CreatePost;
