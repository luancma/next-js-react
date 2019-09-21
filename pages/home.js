import React from 'react';

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '../src/hocs/withAnalytics';

const Home = () => (
  <div>
    <Head>
      <title>Home Page</title>
    </Head>
    <h1>Suplementos</h1>
    <img src="/static/suplementos.jpg" alt="Suplemento"
    width="250"/>
    <Link href="/posts"><a>Posts</a></Link>
  </div>
)

export default withAnalytics()(Home);
