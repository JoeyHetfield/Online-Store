import { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';
import Botao from './Botao';

class ProductDetail extends Component {
  state = {
    produto: {},
    // novoStorage: [],
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const productDetalhes = await getProductById(id);
    this.setState({
      produto: productDetalhes,
    });
    // const meuLocal = JSON.parse(localStorage.getItem('items'));
    // this.setState({ novoStorage: meuLocal });
  }

  addCart = (product) => {
    localStorage.setItem('item', JSON.stringify(product));
  };

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
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          id={ produto }
          onClick={ () => this.addCart(produto) }
        >
          {' '}
          Adicionar ao carrinho
          {' '}
        </button>

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
