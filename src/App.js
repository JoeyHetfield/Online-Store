import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/cart" component={ Cart } />
        <Route exact path="/product/:id" component={ ProductDetail } />
      </Switch>
    </div>
  );
}
export default App;
