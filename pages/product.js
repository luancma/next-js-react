import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '../src/hocs/withAnalytics';

const Product = () => (

      <>
      <Head>
        <title>Luan Suplementos - (TOP) Whey Protein Concentrado (1KG) - Growth Supplements</title>
        <meta name="description" content="Suplementos alimentares" />
        <meta name="keywords" content="Fitness, suplementos, academia, saúde" />
      </Head>

      <article>
      <h1>CREATINA (250G) (CREAPURE®) - GROWTH SUPPLEMENTS</h1>
      <p>Creatina</p>
      <p>A creatina é um derivado de aminoácidos obtida através da dieta de síntese por nosso próprio organismo. Ela está presente essencialmente no músculo e auxilia na manutenção dos níveis de energia durante períodos breves de exercício intenso. Ou seja, sua função é crucial nos treinos com muito peso na busca pelo ganho de massa.
      </p>
      <Link href="https://www.gsuplementos.com.br/creatina-250g-creapure-growth-supplements-p985824"><a>Site oficial</a></Link>
      </article>

      <article>
      <h1>MALTODEXTRINA (1KG) - GROWTH SUPPLEMENTS</h1>
      <p>MALTODEXTRINA </p>
      <p>Um produto elaborado pensando na máxima qualidade em energia, o suplemento Malto é o que você precisa para superar seus desafios na rotina de treino. Com o combustível certo seu corpo consegue desempenhar melhor suas funções.
      </p>
      <Link href="https://www.gsuplementos.com.br/maltodextrina-1kg-growth-supplements-p985957"><a>Site oficial</a></Link>
      </article>


      <article>
      <h1>(TOP) Whey Protein Concentrado (1KG) - Growth Supplements</h1>
      <p>Whey Protein</p>
      <p>Whey Protein Growth é a proteína ideal para quem treina hipertrofia e quer ganhar massa muscular.
        Ideal porque é um suplemento de alto valor biológico, com grande concentração de proteínas e aminoácidos e também rico em Glutamina, BCAA e Leucina.
      </p>
      <Link href="https://www.gsuplementos.com.br/whey-protein-concentrado-1kg-growth-supplements-p985936"><a>Site oficial</a></Link>
      </article>
    </>
);

export default withAnalytics()(Product);
