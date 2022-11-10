import { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';
import Botao from './Botao';

class ProductDetail extends Component {
  state = {
    produto: {},
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const productDetalhes = await getProductById(id);
    this.setState({
      produto: productDetalhes,
    });
    console.log(productDetalhes);
  }

  render() {
    const { produto } = this.state;
    return (
      <div>
        <h1 data-testid="product-detail-name">
          { produto.title }
        </h1>
        <img
          data-testid="product-detail-image"
          src={ produto.thumbnail }
          alt={ produto.title }
        />
        <p data-testid="product-detail-price">
          {' '}
          { produto.price }
          {' '}
        </p>
        <Botao />
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetail;
