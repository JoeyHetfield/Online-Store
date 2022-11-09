import { Component } from 'react';
import PropTypes from 'prop-types';

class Botao extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <button onClick={ () => history.push('/Cart') } type="button">Entrar</button>
      </div>
    );
  }
}

Botao.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default Botao;
