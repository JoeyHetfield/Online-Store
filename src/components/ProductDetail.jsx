import { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';
import Botao from './Botao';

class ProductDetail extends Component {
  state = {
    produto: {},
    email: '',
    mensagem: '',
    radio: '',
    isValid: false,
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const productDetalhes = await getProductById(id);
    this.setState({
      produto: productDetalhes,
    });
  }

  addCart = (product) => {
    localStorage.setItem('item', JSON.stringify(product));
  };

  validForm = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    }, () => {
      const { email, mensagem, radio } = this.state;
      const dOEmail = email.length > 0;
      const doMensagem = mensagem.length > 0;
      const doRadio = radio.length > 0;
      const chefona = dOEmail && doMensagem && doRadio;
      if (chefona) {
        this.setState({
          mensagem: '',
          radio: '',
          email: '',
        });
      }
      this.setState({ isValid: chefona });
    });
  };

  render() {
    const { produto, email, mensagem, isValid } = this.state;
    return (
      <div>
        <h1 data-testid="product-detail-name">
          { produto.title }
        </h1>
        <img
          data-testid="product-detail-image"
          src={ produto.thumbnail }
          alt={ produto.title }
        />
        <p data-testid="product-detail-price">
          {' '}
          { produto.price }
          {' '}
        </p>
        <Botao />
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          id={ produto }
          onClick={ () => this.addCart(produto) }
        >
          {' '}
          Adicionar ao carrinho
          {' '}
        </button>
        <br />
        {!isValid && <p data-testid="error-msg">Campos inválidos</p> }
        <form action="">

          <label htmlFor="email">

            <input
              onChange={ this.validForm }
              name="email"
              value={ email }
              data-testid="product-detail-email"
              id="email"
              type="text"
            />
          </label>
          <br />
          <label htmlFor="radio">
            <input
              data-testid="1-rating"
              onChange={ this.validForm }
              name="radio"
              value="1"
              type="radio"
            />
          </label>
          <label htmlFor="radio">
            <input
              data-testid="2-rating"
              onChange={ this.validForm }
              name="radio"
              value="2"
              type="radio"
            />
          </label>
          <label htmlFor="radio">
            <input
              data-testid="3-rating"
              onChange={ this.validForm }
              name="radio"
              value="3"
              type="radio"
            />
          </label>
          <label htmlFor="radio">
            <input
              data-testid="4-rating"
              onChange={ this.validForm }
              name="radio"
              value="4"
              type="radio"
            />
          </label>
          <label htmlFor="radio">
            <input
              data-testid="5-rating"
              onChange={ this.validForm }
              name="radio"
              value="5"
              type="radio"
            />
          </label>
          <br />
          <label htmlFor="mensagem">
            <textarea
              name="mensagem"
              onChange={ this.validForm }
              value={ mensagem }
              data-testid="product-detail-evaluation"
              placeholder="mensagem"
              id="mensagem"
            />
          </label>
          <button
            data-testid="submit-review-btn"
            type="button"
          >
            Enviar Formulario

          </button>

        </form>

      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetail;
