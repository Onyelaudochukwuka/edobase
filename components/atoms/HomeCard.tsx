import React, { FC } from 'react';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export interface IHomeCardProps {
  image: string | StaticImageData
  title: string
  uuid: string
  comments: number
}

const HomeCard: FC<IHomeCardProps> = ({
  image,
  title,
  uuid,
  comments,
}) => {
  return (
    <div className="flex flex-col gap-2 mx-auto items-center bg-white rounded-lg overflow-hidden shadow-xl w-full relative h-fit">
      <div className="relative w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col content-between gap-3 py-3">
        <Link href={`/posts/${uuid}`}>
          <h3 className="lg:text-3xl text-base font-bold no-break">
            {title}
          </h3>
        </Link>
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
        <div className="w-1 h-1 bg-white rounded-full after:w-1 after:h-1 after:bg-white after:rounded-full before:w-1 before:h-1 before:bg-white before:rounded-full before:absolute after:absolute relative before:-top-2 after:top-2" />
      </div>
    </div>
  );
};
export default HomeCard;
