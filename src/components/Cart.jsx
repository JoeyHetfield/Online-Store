import { Component } from 'react';

class Cart extends Component {
  state = {
    cart: [],
  };

  componentDidMount() {
    const localStoragee = JSON.parse(localStorage.getItem('items'));
    if (localStoragee) {
      this.setState({
        cart: localStoragee,
      });
    }
  }

  render() {
    const { cart } = this.state;
    const renderLocal = cart.map((item) => (
      <li data-testid="shopping-cart-product-name" key={ item.id }>
        { item.title }
        <img src={ item.thumbnail } alt={ item.title } />
        { item.price }
        <p data-testid="shopping-cart-product-quantity"> 1 </p>
      </li>
      // ACERTAR QUANTIDADE DOS ITENS NA TAG P
    ));
    return (
      <div>
        {
          cart.length ? (
            <ul>
              { renderLocal }
            </ul>
          )
            : (
              <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
            )
        }
        <button type="button">botao</button>
      </div>
    );
  }
}

export default Cart;
