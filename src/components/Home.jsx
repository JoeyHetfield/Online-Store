import { Component } from 'react';
import ProductsList from './ProductList';
import Botao from './Botao';

class Home extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <ProductsList />
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        <button data-testid="shopping-cart-button" type="button">botao</button>
        <Botao />
      </div>
    );
  }
}

export default Home;
