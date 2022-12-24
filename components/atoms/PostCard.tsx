import React, { FC } from 'react';

import moment from 'moment';

export interface IPostCardProps {
  gender: 'M' | 'F'
  time: number
  comments: number
  views: number
  title: string
}

const PostCard: FC<IPostCardProps> = ({
  gender, time, comments, views, title,
}) => {
  // eslint-disable-next-line no-console
  return (
    <div className="flex bg-white flex-col px-6 py-4 gap-4 w-full rounded-md shadow-xl shadow-black/5">
      <div className="flex flex-col gap-2">
        <span>
          Author

          (
          {gender}
          )
        </span>
        <span className="text-xs">{moment(time).format('h:mm • MMMM Do,YYYY')}</span>
      </div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex justify-between text-xs lg:flex-base">
        <span>
          {comments}
          {' '}
          comments
        </span>
        <span>
          {views}
          {' '}
          views
        </span>
        <span>
          Share
        </span>
      </div>
    </div>
  );
};

export default PostCard;
