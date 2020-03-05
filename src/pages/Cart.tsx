import React from 'react';
import Button from '../components/Button';
import { CartState, CartProps } from '../Interfaces/interfaces';

class Cart extends React.Component<CartProps, CartState> {
  state: CartState = {
    temp: true,
  };

  render() {
    return (
      <section>
        <Button
          label="Empty Cart"
          onClick={this.props.emptyCart}
          disabled={this.props.appState.cartQty === 0}
        />
      </section>
    );
  }
}

export default Cart;