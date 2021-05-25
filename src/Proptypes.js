import React from 'react';
import Product from './Product';
import { useDon } from './useDon';

const url = 'https://api.github.com/users';

const Proptypes = () => {
  const { products } = useDon(url);
  console.log(products);
  return (
    <div>
      <h1>products</h1>
      <section>
        {products.map((p) => {
          return <Product key={p.id} {...p} />;
        })}
      </section>
    </div>
  );
};

export default Proptypes;
