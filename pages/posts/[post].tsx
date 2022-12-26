import React from 'react';

import type { NextPage } from 'next';

import { Layout, PostView } from '../../components';
import type { IPostViewProps } from '../../components/PostView';

export interface IPostProps {
  slug: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, react/prop-types
const Post: NextPage<IPostProps> = ({ slug }) => {
  const post: IPostViewProps = {
    author: 'string',
    title: 'THIS IS A TITLE',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste delectus voluptate unde! Inventore tempore rem nobis aut natus. Esse nobis facere quos error placeat voluptas cumque at tempora reprehenderit ipsum.',
    comments: 50,
    views: 1159,
    time: Date.now(),
    likes: 30,
    dislikes: 50,
    gender: 'M',
  };
  return (
    <Layout className="flex gap-6 flex-col mx-auto my-6 w-11/12">
      <PostView {...post} />
    </Layout>
  );
};
Post.getInitialProps = async ({ query }: any) => {
  const { slug } = query;
  return { slug };
};
export default Post;
