import React from 'react';
import axios from 'axios';

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '../src/hocs/withAnalytics';

const Posts = ({ posts }) => (
  <div>
    <Head>
      <title>Posts Page</title>
    </Head>
    <h1>Postagens</h1>
        <Link href="/"><a>Home</a></Link>
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <div>
            <h1>{post.title}</h1>
            <Link href={`/posts/detail/${post.id}`}><a>Detalhes</a></Link>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

Posts.getInitialProps = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );

  return { posts: response.data };
}
export default withAnalytics()(Posts);
