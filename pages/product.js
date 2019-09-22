import React from 'react';
import Link from 'next/link';


const Product = () => (

        <div style={{ display: 'flex', justifyContent: 'space-around'}}>
      <article style={{
        'display': 'flex',
        'flexDirection': 'column',

        'width': '200px'
      }}>
        <h2>Suplemento Growth </h2>
        <h3>Categoria: <strong>Whey Protein</strong></h3>

        <img src="https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/185/01-desk.png"  alt="Luan Suplementos - Grow"width="200"/>
      <p>Whey Protein Growth é a proteína ideal para quem treina hipertrofia e quer ganhar massa muscular.
        Ideal porque é um suplemento de alto valor biológico, com grande concentração de proteínas e aminoácidos e também rico em Glutamina, BCAA e Leucina.
      </p>
      <Link href="https://www.gsuplementos.com.br/whey-protein-concentrado-1kg-growth-supplements-p985936"><a>Site oficial</a></Link>
      </article>
    </div>
);

export default Product;
