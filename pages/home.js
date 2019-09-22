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

    <div style={{ display: 'flex', justifyContent: 'space-around'}}>
    <article style={{
      'display': 'flex',
      'flexDirection': 'column',

      'width': '200px'
    }}>
      <h2>Suplemento Grow</h2>
      <img src="https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/185/01-desk.png"  alt="Luan Suplementos - Grow"width="200"/>
    <span>Whey Protein Growth é a proteína ideal para quem treina hipertrofia e quer ganhar massa muscular.
      Ideal porque é um suplemento de alto valor biológico, com grande concentração de proteínas e aminoácidos e também rico em Glutamina, BCAA e Leucina.
    </span>
    <Link href="https://www.gsuplementos.com.br/whey-protein-concentrado-1kg-growth-supplements-p985936"><a>Site oficial</a></Link>
    </article>

    <article style={{
      'display': 'flex',
      'flexDirection': 'column',

      'width': '200px'
    }}>
      <h2>Suplemento Grow</h2>
      <img src="https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/185/01-desk.png"  alt="Luan Suplementos - Grow"width="200"/>
    <span>Whey Protein Growth é a proteína ideal para quem treina hipertrofia e quer ganhar massa muscular.
      Ideal porque é um suplemento de alto valor biológico, com grande concentração de proteínas e aminoácidos e também rico em Glutamina, BCAA e Leucina.
    </span>
    <Link href="https://www.gsuplementos.com.br/whey-protein-concentrado-1kg-growth-supplements-p985936"><a>Site oficial</a></Link>
    </article>

    <article style={{
      'display': 'flex',
      'flexDirection': 'column',

      'width': '200px'
    }}>
      <h2>Suplemento Grow</h2>
      <img src="https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/185/01-desk.png"  alt="Luan Suplementos - Grow"width="200"/>
    <span>Whey Protein Growth é a proteína ideal para quem treina hipertrofia e quer ganhar massa muscular.
      Ideal porque é um suplemento de alto valor biológico, com grande concentração de proteínas e aminoácidos e também rico em Glutamina, BCAA e Leucina.
    </span>
    <Link href="https://www.gsuplementos.com.br/whey-protein-concentrado-1kg-growth-supplements-p985936"><a>Site oficial</a></Link>
    </article>
    </div>

    <Link href="/posts"><a>Posts</a></Link>
  </div>
)

export default withAnalytics()(Home);
