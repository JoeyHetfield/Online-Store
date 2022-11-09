import { Component } from 'react';
import Botao from './Botao';

class Cart extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <Botao />
      </div>
    );
  }
}

export default Cart;
