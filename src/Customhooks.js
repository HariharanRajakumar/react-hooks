import React from 'react';
import { useDon } from './useDon';
const url = 'https://api.github.com/users';

const Customhooks = () => {
  const { loading, products } = useDon(url);
  console.log(loading, products);
  return (
    <div>
      {loading ? (
        'loading'
      ) : (
        <>
          {products.map((p) => (
            <h1>{p.login}</h1>
          ))}
        </>
      )}
    </div>
  );
};

export default Customhooks;
