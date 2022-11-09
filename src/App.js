import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    </div>
  );
}
export default App;
