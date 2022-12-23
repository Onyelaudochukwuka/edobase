import React from "react";

import type { NextPage } from 'next';
import { Layout } from "../../components";

export interface IPostProps {
  slug: string
}

const Post: NextPage<IPostProps> = ({ slug }) => {
  return (
    <Layout className="">
      post
    </Layout>
  );
};
Post.getInitialProps = async ({ query }: any) => {
  const { slug } = query;
  return { slug };
};
export default Post;
