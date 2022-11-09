import { Component } from 'react';
import ProductsList from './ProductList';
import Botao from './Botao';

class Home extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <ProductsList />
        <Botao />
      </div>
    );
  }
}

export default Home;
