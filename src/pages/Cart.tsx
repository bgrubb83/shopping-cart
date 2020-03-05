import React from 'react';
import Button from '../components/Button';
import CartProduct from '../components/CartProduct';
import { findProductTitle } from '../services/productFunctions'
import { CartState, CartProps } from '../Interfaces/interfaces';

class Cart extends React.Component<CartProps, CartState> {
  state: CartState = {
    temp: true,
  };

  render() {
    const { emptyCart, appState } = this.props;
    console.log(appState.cart);
    return (
      <section>
        <Button
          label="Empty Cart"
          onClick={emptyCart}
          disabled={appState.cartQty === 0}
        />



        {Object.keys(appState.cart).map((productId: any) => {
          console.log(productId)
          // console.log(appState.cart[product.id])
          // return <p>{appState.cart[product.id]}</p>
          return <CartProduct
                  title={findProductTitle(productId, appState.products)}
          />
        })}

      </section>
    );
  }
}

export default Cart;