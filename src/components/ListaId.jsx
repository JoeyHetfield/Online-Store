import { Component } from 'react';
import PropTypes from 'prop-types';

class ListaId extends Component {
  render() {
    const { productName, productImage, productPrice } = this.props;
    return (
      <div>
        <h1>
          {' '}
          { productName }
        </h1>
        <img src={ productImage } alt={ productName } />
        <h2>
          {' '}
          { productPrice }
        </h2>
      </div>
    );
  }
}

ListaId.propTypes = {
  productName: PropTypes.string,
  productImage: PropTypes.string,
  productPrice: PropTypes.string,
}.isRequired;

export default ListaId;
