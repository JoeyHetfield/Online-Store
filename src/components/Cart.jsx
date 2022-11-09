import { Component } from 'react';
import Botao from './Botao';

class Cart extends Component {
  render() {
    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        <button type="button">botao</button>
        <Botao />
      </div>
    );
  }
}

export default Cart;
