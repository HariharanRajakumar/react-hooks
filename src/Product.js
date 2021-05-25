import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ login, avatar_url }) => {
  return (
    <div>
      <h1>{login}</h1>
      <img src={avatar_url} alt="" />
    </div>
  );
};

Product.propTypes = {
  avatar_url: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
};

export default Product;
