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
    <div className="flex">
      <div>
        <span>
          Author:
          {gender}
        </span>
        <span>{moment(time).format('h:mm • MM Do,YYYY')}</span>
      </div>
      <p>{title}</p>
      <div>
        <span>
          {comments}
          {' '}
          comments
        </span>
        <span>
          {views}
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
