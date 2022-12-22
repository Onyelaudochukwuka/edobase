import React, { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

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
    <Link href={`/post/${uuid}`}>
      <div className="flex w-3/4 mx-auto items-center">
        <div className="basis-7/12">
          <Image
            src={image}
            width={300}
            height={200}
            alt={title}
          />
        </div>
        <div className="flex flex-col justify-around h-full content-between gap-5">
          <h3 className="text-3xl font-bold">{title}</h3>
          <span>{topic}</span>
          <div>
            <span>
              {comments}
              {' '}
              comments
            </span>
            <span>Share</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default HomeCard;
