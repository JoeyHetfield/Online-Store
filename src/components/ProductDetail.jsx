import { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';
import Botao from './Botao';

class ProductDetail extends Component {
  state = {
    produto: {},
    email: '',
    mensagem: '',
    rating: '',
    isValid: false,
    idReviews: [],
    invalidBtn: false,
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const productDetalhes = await getProductById(id);
    this.setState({
      produto: productDetalhes,
    });
    this.pullStorageReviews();
  }

  pullStorageReviews = () => {
    const { match: { params: { id } } } = this.props;
    const idReview = JSON.parse(localStorage.getItem(id));
    if (idReview) {
      this.setState({ idReviews: idReview });
    } else {
      this.setState({ idReviews: [] });
    }
  };

  addCart = (product) => {
    localStorage.setItem('item', JSON.stringify(product));
  };

  validForm = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    }, () => {
      const { email, mensagem, rating } = this.state;
      const dOEmail = email.length > 0;
      const doMensagem = mensagem.length > 0;
      const doRadio = rating.length > 0;
      const chefona = dOEmail && doMensagem && doRadio;
      if (chefona) {
        this.setState({
          mensagem,
          rating,
          email,
        });
      }
      this.setState({ isValid: chefona });
    });
  };

  sendForm = () => {
    const { match: { params: { id } } } = this.props;
    const { mensagem, rating, email, isValid } = this.state;
    const review = {
      email,
      rating,
      mensagem,
    };

    if (!isValid) {
      this.setState({ invalidBtn: true });
    }

    if (isValid) {
      const allStorageReview = JSON.parse(localStorage.getItem(id));
      if (allStorageReview) {
        const mergeStorage = [...allStorageReview, review];
        localStorage.setItem(id, JSON.stringify(mergeStorage));
      } else {
        const emptyReview = [];
        const mergeStorage2 = [...emptyReview, review];
        localStorage.setItem(id, JSON.stringify(mergeStorage2));
      }
    }
    this.setState({
      mensagem: '',
      rating: '',
      email: '',
    });
    this.pullStorageReviews();
  };

  render() {
    const { produto, email, mensagem,
      isValid, idReviews, rating, invalidBtn } = this.state;
    const emptyState = !email && !mensagem && !rating;
    const allIdReviews = idReviews.map((review, index) => (
      <div data-testid="shopping-cart-product-name" key={ index }>
        <p data-testid="review-card-email">{ review.email }</p>
        <p data-testid="review-card-evaluation">{ review.mensagem }</p>
        <p data-testid="review-card-rating">{ review.rating }</p>
      </div>
    ));
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
        {/* { invalidBtn && <p data-testid="error-msg">Campos inválidos</p> } */}
        {((!isValid && !emptyState) || invalidBtn)
          && <p data-testid="error-msg">Campos inválidos</p> }
        {/* {invalidBtn && <span data-testid="error-msg">Campos inválidos</span> } */}
        <form action="">

          <label htmlFor="email">

            <input
              onChange={ this.validForm }
              name="email"
              value={ email }
              data-testid="product-detail-email"
              id="email"
              type="email"
              required
              placeholder="email"
            />
          </label>
          <br />
          <label htmlFor="1-rating">
            <input
              data-testid="1-rating"
              id="1-rating"
              onChange={ this.validForm }
              name="rating"
              value="1"
              type="radio"
            />
            1
          </label>
          <label htmlFor="2-rating">
            <input
              data-testid="2-rating"
              id="2-rating"
              onChange={ this.validForm }
              name="rating"
              value="2"
              type="radio"
            />
            2
          </label>
          <label htmlFor="3-rating">
            <input
              data-testid="3-rating"
              id="3-rating"
              onChange={ this.validForm }
              name="rating"
              value="3"
              type="radio"
            />
            3
          </label>
          <label htmlFor="4-rating">
            <input
              data-testid="4-rating"
              id="4-rating"
              onChange={ this.validForm }
              name="rating"
              value="4"
              type="radio"
            />
            4
          </label>
          <label htmlFor="5-rating">
            <input
              data-testid="5-rating"
              id="5-rating"
              onChange={ this.validForm }
              name="rating"
              value="5"
              type="radio"
            />
            5
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
            onClick={ this.sendForm }
          >
            Enviar Formulario

          </button>

        </form>
        <h3>Avaliações do produto:</h3>
        { allIdReviews }
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
