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
    <div>
      <div>
        <Image src={image} alt={title} placeholder="blur" />
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
