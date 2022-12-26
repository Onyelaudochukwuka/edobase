import React, { FC } from 'react';

import moment from 'moment';

export interface ICommentsProps {
  reply: string
  author: string
  comment: string
  likes: number
  dislikes: number
  time: number
}

const Comments: FC<ICommentsProps> = ({
  reply, author, comment, likes, dislikes, time,
}) => {
  return (
    <div className="bg-white w-full p-6 flex flex-col gap-4 rounded-md shadow-2xl shadow-black/5">
      <div>
        <h3>
          RE:
          {' '}
          <span className="text-primary">
            @
            {reply}
          </span>
        </h3>
        <span className="text-xs font-semibold">
          {moment(time).format('h:mm • MMMM Do,YYYY')}
        </span>
      </div>
      <h4 className="font-bold text-lg">{author}</h4>
      <p>{comment}</p>
      <div className="flex gap-4 font-medium w-full justify-between border-t-2 border-gray pt-4 lg:text-xs text-xxs">
        <span className="hover:underline transition-all ease-in duration-500 cursor-pointer">
          {likes}
          {' '}
          likes
        </span>
        <span className="hover:underline transition-all ease-in duration-500 cursor-pointer">
          {dislikes}
          {' '}
          dislikes
        </span>
        <span className="hover:underline transition-all ease-in duration-500 cursor-pointer">
          Quote
        </span>
        <span className="hover:underline transition-all ease-in duration-500 cursor-pointer">
          Share
        </span>
        <span className="hover:underline transition-all ease-in duration-500 cursor-pointer">
          Report
        </span>
      </div>
    </div>
  );
};
export default Comments;
