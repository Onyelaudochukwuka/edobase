import React, { FC } from 'react';

import Image from 'next/image';

export interface IHomeCardProps {
  image: string
  title: string
  description: string
  uuid: string
  comments: number
  topic: string
}

const HomeCard: FC<IHomeCardProps> = ({
  image,
  title,
  description,
  uuid,
  comments,
  topic,
}) => {
  return (
    <div className="flex">
      <div className="basis-7/12">
        <Image
          src={image}
          width={300}
          height={200}
          alt={title}
        />
      </div>
      <div>
        <h3>{title}</h3>
        <span>Topic</span>
        <div>
          <span>12 comments</span>
          <span>Share</span>
        </div>
      </div>
    </div>
  );
};
export default HomeCard;
