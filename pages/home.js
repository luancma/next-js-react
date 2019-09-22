import React from 'react';

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '../src/hocs/withAnalytics';

const Home = () => (
  <div>
    <Head>
      <title>Luan Suplementos - Início</title>
      <meta name="description" content="Suplementos alimentares" />
      <meta name="keywords" content="Fitness, suplementos, academia, saúde" />
    </Head>
    <h1>Luan Suplementos</h1>

    <Link href="/product"><a>Produto</a></Link>
    <br />
    <Link href="/posts"><a>Posts</a></Link>



    <article>
      <h1>CREATINA (250G) (CREAPURE®) - GROWTH SUPPLEMENTS</h1>
      <p>Creatina</p>
      <p>A creatina é um derivado de aminoácidos obtida através da dieta de síntese por nosso próprio organismo. Ela está presente essencialmente no músculo e auxilia na manutenção dos níveis de energia durante períodos breves de exercício intenso. Ou seja, sua função é crucial nos treinos com muito peso na busca pelo ganho de massa.
      </p>
      <div>
      <Link href="https://www.gsuplementos.com.br/creatina-250g-creapure-growth-supplements-p985824"><a>Site oficial</a></Link>
      </div>
      </article>

      <article>
      <h1>Passe o mouse para ampliar a imagem
        Glutamine Isolates, IntegralMedica, 1000 g</h1>
      <p>Glutamine </p>
      <p>"Auxiliam o transporte de nitrogênio nos músculos, que beneficia o processo de hipertrofia"
Atua como nutriente às células imunológicas
Apresenta importante função anabólica promovendo o crescimento muscular
"Desempenha um papel fundamental no metabolismo proteico e no anti-catabolismo, ajudando o corpo a se proteger contra as perdas excessivas de tecido muscular"
"Aplicada em conjunto com atividade física promove ainda melhor recuperação, ganho de força e massa muscular".
      </p>
      <div>
      <Link href="https://www.amazon.com.br/Glutamina-Isolates-Refil-1kg-Integralm%C3%A9dica/dp/B07LB6XSZJ/ref=asc_df_B07LB6XSZJ/?tag=googleshopp00-20&linkCode=df0&hvadid=379728658543&hvpos=1o2&hvnetw=g&hvrand=18304464081904484315&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001506&hvtargid=pla-815206396261&psc=1"><a>Site oficial</a></Link>
      </div>
      </article>

      <article>
      <h1>MALTODEXTRINA (1KG) - GROWTH SUPPLEMENTS</h1>
      <p>MALTODEXTRINA </p>
      <p>Um produto elaborado pensando na máxima qualidade em energia, o suplemento Malto é o que você precisa para superar seus desafios na rotina de treino. Com o combustível certo seu corpo consegue desempenhar melhor suas funções.
      </p>
      <div>
      <Link href="https://www.gsuplementos.com.br/maltodextrina-1kg-growth-supplements-p985957"><a>Site oficial</a></Link>
      </div>
      </article>


      <article>
      <h1>(TOP) Whey Protein Concentrado (1KG) - Growth Supplements</h1>
      <p>Whey Protein</p>
      <p>Whey Protein Growth é a proteína ideal para quem treina hipertrofia e quer ganhar massa muscular.
        Ideal porque é um suplemento de alto valor biológico, com grande concentração de proteínas e aminoácidos e também rico em Glutamina, BCAA e Leucina.
      </p>
      <div>

      <Link href="https://www.gsuplementos.com.br/whey-protein-concentrado-1kg-growth-supplements-p985936"><a>Site oficial</a></Link>
      </div>
      </article>

  </div>
)

export default withAnalytics()(Home);
