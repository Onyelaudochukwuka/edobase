import React, { FC } from 'react';

export interface IPostCardProps {
  img: string
  title: string
  metadata: {
    comments: number
  }
}

const PostCard: FC<IPostCardProps> = ({ img, title, metadata: { comments } }) => {
  // eslint-disable-next-line no-console
  console.log(img, comments, title);
  return (
    <div className="flex">
      PostCard
    </div>
  );
};

export default PostCard;
