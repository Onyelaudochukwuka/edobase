import React, { FC } from 'react';

import Image, { StaticImageData } from 'next/legacy/image';
import Link from 'next/link';

import { Comment } from '../../assets';

export interface IHomeCardProps {
  image: string | StaticImageData
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
    <div className="flex gap-6 mx-auto items-center bg-white pr-8 rounded-lg overflow-hidden shadow-xl w-11/12 relative">
      <div className="relative basis-6/12">
        <Image
          src={image}
          alt={title}
          layout="responsive"
          className="w-full h-full object-cover aspect-video"
        />
      </div>
      <div className="flex flex-col justify-around h-full content-between gap-3 basis-6/12">
        <Link href={`/post/${uuid}`}>
          <h3 className="lg:text-3xl text-xl font-bold">{title}</h3>
        </Link>
        <span className="bg-gray w-fit px-5 py-1 rounded-full text-xxs lg:text-xs">
          {topic}
        </span>
        <div className="flex justify-between items-center text-sm">
          <div className="flex gap-2 items-center lg:text-base text-xs relative">
            {/* <Comment />
            <span className="bg-action text-xxs text-white rounded-full w-3 h-3 grid place-content-center -right-1 -top-1 absolute">
              {comments}
            </span> */}
            {comments}
            {' '}
            comments
          </div>
          <span className="text-xs">Share</span>
        </div>
      </div>
      <div className="absolute right-4 top-8">
        <div className="w-1.5 h-1.5 bg-gray rounded-full after:w-1.5 after:h-1.5 after:bg-gray after:rounded-full before:w-1.5 before:h-1.5 before:bg-gray before:rounded-full before:absolute after:absolute relative before:-top-3 after:top-3" />
      </div>
    </div>
  );
};
export default HomeCard;
