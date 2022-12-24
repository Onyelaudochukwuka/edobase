import React, { FC } from 'react';

import Image, { StaticImageData } from 'next/legacy/image';
import Link from 'next/link';

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
    <div className="flex gap-8 mx-auto items-center bg-white pr-8 rounded-lg overflow-hidden shadow-xl w-full relative">
      <div className="relative basis-6/12 lg:scale-100 scale-150">
        <Image
          src={image}
          alt={title}
          layout="responsive"
          className="w-full h-full object-cover aspect-video "
        />
      </div>
      <div className="flex flex-col justify-around h-full content-between gap-3 basis-6/12 py-3">
        <div className="flex flex-col gap-3">
          <Link href={`/posts/${uuid}`}>
            <h3 className="lg:text-3xl text-base font-bold no-break">
              {title}
            </h3>
          </Link>
          <span className="bg-gray w-fit lg:px-5 px-3 py-1 rounded-full text-xxs lg:text-xs">
            {topic}
          </span>
        </div>
        <div className="flex justify-between items-center lg:text-sm text-xxs">
          <div className="flex gap-2 items-center relative">
            {/* <Comment />
            // eslint-disable-next-line max-len
            <span className="bg-action text-xxs
            text-white rounded-full w-3 h-3 grid place-content-center -right-1 -top-1 absolute">
              {comments}
            </span> */}
            {comments}
            {' '}
            comments
          </div>
          <span className="text-inherit">Share</span>
        </div>
      </div>
      <div className="absolute right-4 top-6">
        <div className="w-1 h-1 bg-gray rounded-full after:w-1 after:h-1 after:bg-gray after:rounded-full before:w-1 before:h-1 before:bg-gray before:rounded-full before:absolute after:absolute relative before:-top-2 after:top-2" />
      </div>
    </div>
  );
};
export default HomeCard;
