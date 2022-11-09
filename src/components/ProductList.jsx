import React, { Component } from 'react';
import { getCategories } from '../services/api';

class ProductsList extends Component {
  state = {
    lista: [],
  };

  async componentDidMount() {
    const allCategories = await getCategories();
    this.setState({ lista: allCategories });
  }

  render() {
    const { lista } = this.state;
    return (
      <ul>
        {
          lista.map((category) => (
            <li id="liProducts" key={ category.id }>
              <label
                data-testid="category"
                htmlFor={ category.id }
              >
                <input
                  type="radio"
                  id={ category.id }
                  name="category"
                />
                {category.name}
              </label>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default ProductsList;
