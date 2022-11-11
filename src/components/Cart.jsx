import { Component } from 'react';

class Cart extends Component {
  state = {
    cart: [],
    cart2: {},
  };

  componentDidMount() {
    const localStoragee = JSON.parse(localStorage.getItem('items'));
    const localStoragee2 = JSON.parse(localStorage.getItem('item'));
    console.log(localStoragee2);
    if (localStoragee) {
      this.setState({
        cart: localStoragee,
      });
    }
    if (localStoragee2) {
      this.setState({
        cart2: localStoragee2,
      });
    }
  }

  render() {
    const { cart, cart2 } = this.state;
    const renderLocal = cart.map((item) => (
      <li data-testid="shopping-cart-product-name" key={ item.id }>
        { item.title }
        <img src={ item.thumbnail } alt={ item.title } />
        { item.price }
        <p data-testid="shopping-cart-product-quantity"> 1 </p>
      </li>
      // ACERTAR QUANTIDADE DOS ITENS NA TAG P
    ));
    const renderLocal2 = (
      <li data-testid="shopping-cart-product-name">
        { cart2.title }
        <img src={ cart2.thumbnail } alt={ cart2.title } />
        { cart2.price }
        <p data-testid="shopping-cart-product-quantity"> 1 </p>
      </li>
      // ACERTAR QUANTIDADE DOS ITENS NA TAG P
    );
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
        { renderLocal2 }
        <button type="button">botao</button>
      </div>
    );
  }
}

export default Cart;
