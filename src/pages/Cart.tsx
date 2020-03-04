import React from 'react';

interface CartProps {
    temp?: any;
  };
  interface CartState {
    temp?: any;
  };
  class Cart extends React.Component<CartProps, CartState> {
    state: CartState = {
      temp: true,
    };
    
    render() {
      return (
        <div>
          <h2>Cart</h2>
        </div>
      );
    }
  }

  export default Cart;