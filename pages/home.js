import React from 'react';

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '../src/hocs/withAnalytics';

const Home = () => (
  <div>
    <Head>
      <title>Luan Suplementos - Início</title>
    </Head>
    <h1>Luan Suplementos</h1>

    <Link href="/product"><a>Produto</a></Link>
    <br />
    <Link href="/posts"><a>Posts</a></Link>

  </div>
)

export default withAnalytics()(Home);
