import { Component } from 'react';
import { Link } from 'react-router-dom';

class Botao extends Component {
  render() {
    return (
      <div>
        <Link to="/cart">
          <button
            data-testid="shopping-cart-button"
            type="button"
          >
            Carrinho!
          </button>
        </Link>
      </div>
    );
  }
}

export default Botao;
