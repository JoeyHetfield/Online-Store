import React from 'react';
import './App.css';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

class App extends React.Component {
  componentDidMount() {
    getCategories();
    getProductsFromCategoryAndQuery('MLB5672', 'acessorios');
  }

  render() {
    return (
      <div className="App">
        <h1>
          Frontend Online Store
        </h1>
      </div>
    );
  }
}

export default App;
