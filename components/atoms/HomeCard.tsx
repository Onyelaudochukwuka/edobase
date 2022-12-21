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
        <Image
          src={image}
          width={300}
          height={200}
          alt={title}
          placeholder="blur"
          blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
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
