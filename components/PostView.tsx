/* eslint-disable react/no-danger */
import React, { FC } from 'react';

import moment from 'moment';
import Image from 'next/image';

export interface IPostViewProps {
  author: string
  title: string
  content: string
  comments: number
  views: number
  time: number
  likes: number
  dislikes: number
  gender: 'M' | 'F'
}

const PostView: FC<IPostViewProps> = ({
  author, title, content, comments, views, time, likes, dislikes, gender,
}) => {
  return (
    <section className="bg-white w-full p-6 flex flex-col gap-4 rounded-md shadow-2xl shadow-black/5">
      <div className="flex items-center gap-2">
        <Image
          src="/image1.png"
          alt="image"
          width={25}
          height={25}
          className="rounded-full h-[25px]"
        />
        <span className="text-sm font-semibold">
          {author}
          {' '}
          (
          {gender}
          )
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-center">{title}</h1>
        <div className="text-sm" dangerouslySetInnerHTML={{ __html: content }} />
        <div>
          <span className="text-xs font-semibold">
            {moment(time).format('h:mm • MMMM Do,YYYY')}
          </span>
        </div>
        <div className="flex gap-4 text-xs font-semibold">
          <span>
            {likes}
            {' '}
            likes
          </span>
          <span>
            {dislikes}
            {' '}
            dislikes
          </span>
          <span>
            {views}
            {' '}
            views
          </span>
        </div>
        <div className="flex gap-4 lg:text-xs text-xxs justify-between border-b-2 border-t-2 border-gray py-3">
          <span className="hover:underline transition-all ease-in duration-500 cursor-pointer">
            {comments}
            {' '}
            comments
          </span>
          <span className="hover:underline transition-all ease-in duration-500 cursor-pointer">
            Report
          </span>
          <span className="hover:underline transition-all ease-in duration-500 cursor-pointer">
            Share
          </span>
          <span className="hover:underline transition-all ease-in duration-500 cursor-pointer">
            Like
          </span>
          <span className="hover:underline transition-all ease-in duration-500 cursor-pointer">
            Dislike
          </span>
        </div>
      </div>
    </section>
  );
};
export default PostView;
