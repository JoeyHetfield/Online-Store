import { Component } from 'react';
import ProductsList from './ProductList';

class Home extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <ProductsList />
      </div>
    );
  }
}

export default Home;
