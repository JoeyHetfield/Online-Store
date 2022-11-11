import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategory } from '../services/api';

class ProductsList extends Component {
  state = {
    lista: [],
    listaProdutos: [],
    carrinho: [],
  };

  async componentDidMount() {
    const allCategories = await getCategories();
    this.setState({ lista: allCategories });
  }

  handleChange = async (event) => {
    const { id } = event.target;
    const list = await getProductsFromCategory(id);
    this.setState({
      listaProdutos: list.results,
    });
  };

  addCart = (product) => {
    this.setState((prevState) => ({
      carrinho: [...prevState.carrinho, product],
    }), () => {
      const { carrinho } = this.state;
      localStorage.setItem('items', JSON.stringify(carrinho));
    });
  };

  render() {
    const { lista, listaProdutos } = this.state;
    const listaDeProdutos = listaProdutos.map((product, index) => (
      <li
        key={ index }
        data-testid="product"
      >
        <Link data-testid="product-detail-link" to={ `/product/${product.id}` }>

          {product.title}
          <img
            src={ product.thumbnail }
            alt={ product.title }
          />
          {product.price}
          {product.shipping.free_shipping
            ? <p data-testid="free-shipping"> Frete Grátis </p> : null}
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          id={ product }
          onClick={ () => this.addCart(product) }
        >
          {' '}
          Adicionar ao carrinho
          {' '}

        </button>
      </li>
    ));
    return (
      <div>
        <ul>
          {
            lista.map((category) => (
              <li id="liProducts" key={ category.id }>
                <label
                  data-testid="category"
                  htmlFor={ category.id }
                >
                  <input
                    type="radio"
                    id={ category.id }
                    name="category"
                    onChange={ this.handleChange }
                  />
                  {category.name}
                </label>
              </li>
            ))
          }
        </ul>
        { listaDeProdutos }
      </div>
    );
  }
}

export default ProductsList;
