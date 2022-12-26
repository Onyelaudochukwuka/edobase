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
        <h1 className="text-2xl font-semibold text-center">{title}</h1>
        <p className="text-sm">{content}</p>
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
        <div className="flex gap-4 text-sm justify-between border-b-2 border-t-2 border-gray py-3">
          <span>
            {comments}
            {' '}
            comments
          </span>
          <span>Report</span>
          <span>Share</span>
          <span>Like</span>
          <span>Dislike</span>
        </div>
      </div>
    </section>
  );
};
export default PostView;
