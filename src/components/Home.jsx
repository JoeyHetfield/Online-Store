import { Component } from 'react';
import ProductsList from './ProductList';
import Botao from './Botao';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  state = {
    inputValue: '',
    renderedList: [],
  };

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  searchProducts = async () => {
    const { inputValue } = this.state;
    const list = await getProductsFromCategoryAndQuery('', inputValue);
    this.setState({
      renderedList: list.results,
    });
  };

  render() {
    const { inputValue, renderedList } = this.state;
    const listaDeProdutos = renderedList.map((product, index) => (
      <li
        key={ index }
        data-testid="product"
      >
        {product.title}
        <img
          src={ product.thumbnail }
          alt={ product.title }
        />
        {product.price}
      </li>
    ));
    return (
      <div data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <input
          data-testid="query-input"
          type="text"
          value={ inputValue }
          onChange={ this.handleChange }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.searchProducts }
        >
          Pesquisar
        </button>
        { renderedList.length === 0 ? <h3>Nenhum produto foi encontrado</h3> : (
          <ul>
            { listaDeProdutos }
          </ul>
        )}
        <ProductsList />
        <Botao />
      </div>
    );
  }
}

export default Home;
