import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategory } from '../services/api';

class ProductsList extends Component {
  state = {
    lista: [],
    listaProdutos: [],
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
        </Link>
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
