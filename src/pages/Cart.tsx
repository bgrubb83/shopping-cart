import React from 'react';
import Button from '../components/Button';
import CartProduct from '../components/CartProduct';
import { findProductTitle, findProductSkus } from '../services/productFunctions'
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
          return <CartProduct
            title={findProductTitle(productId, appState.products)}
            skus={findProductSkus(productId, appState.products, appState.cart[productId])}
            key={productId}
          />
        })}

      </section>
    );
  }
}

export default Cart;