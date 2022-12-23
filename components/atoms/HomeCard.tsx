import React, { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Comment } from '../../assets';

export interface IHomeCardProps {
  image: string
  title: string
  uuid: string
  comments: number
  topic: string
}

const HomeCard: FC<IHomeCardProps> = ({
  image,
  title,
  uuid,
  comments,
  topic,
}) => {
  return (
    <div className="flex gap-6 w-fit mx-auto items-center bg-white pr-8 rounded-lg overflow-hidden shadow-xl">
      <div className="relative">
        <Image src={image} alt={title} width={300} height={300} />
      </div>
      <div className="flex flex-col justify-around h-full content-between gap-5">
        <Link href={`/post/${uuid}`}>
          <h3 className="text-3xl font-bold">{title}</h3>
        </Link>
        <span className="bg-gray w-fit px-5 py-1 rounded-full text-xs">
          {topic}
        </span>
        <div className="flex justify-between items-center text-sm">
          <div className="flex gap-2 items-center">
            <Comment />
            <span>
              {comments}
              {' '}
              comments
            </span>
          </div>
          <span>Share</span>
          <div className="w-1.5 h-1.5 bg-gray rounded-full after:w-1.5 after:h-1.5 after:bg-gray after:rounded-full before:w-1.5 before:h-1.5 before:bg-gray before:rounded-full before:absolute after:absolute relative before:-left-3 after:left-3" />
        </div>
      </div>
    </div>
  );
};
export default HomeCard;
