import React, { FC } from 'react';

export interface ICommentsProps {
  reply: string
  author: string
  comment: string
  likes: number
  dislikes: number
}

const Comments: FC<ICommentsProps> = ({
  reply, author, comment, likes, dislikes,
}) => {
  return (
    <div>
      <h3>
        RE:
        {' '}
        <span className="text-primary">
          @
          {reply}
        </span>
      </h3>
      <h4>{author}</h4>
      <p>
        {comment}
      </p>
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
          Quote
        </span>
        <span>
          Share
        </span>
        <span>
          Report
        </span>
      </div>
    </div>
  );
};
export default Comments;
