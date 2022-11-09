import { Component } from 'react';
import Botao from './Botao';

class Home extends Component {
  render() {
    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        <button data-testid="shopping-cart-button" type="button">botao</button>
        <Botao />
      </div>
    );
  }
}

export default Home;
