import React from 'react';
import Button from '../components/Button';
import CartProduct from '../components/CartProduct';
import { findProductTitle, findProductSkus } from '../services/productFunctions'
import { CartProps } from '../Interfaces/interfaces';

class Cart extends React.Component<CartProps> {

  render() {
    const { emptyCart, appState, addToCart, removeFromCart } = this.props;

    return (
      <section>
        <Button className="empty-cart-button"
          label="Empty Cart"
          onClick={emptyCart}
          disabled={appState.cartQty === 0}
        />

        {Object.keys(appState.cart).map((productId: any) => {
          return <CartProduct
            title={findProductTitle(productId, appState.products)}
            skus={findProductSkus(productId, appState.products, appState.cart[productId])}
            cartProduct={appState.cart[productId]}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            productId={productId}
            key={productId}
          />
        })}
      </section>
    );
  }
}

export default Cart;