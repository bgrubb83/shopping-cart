import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Shopfront from './pages/Shopfront';
import Cart from './pages/Cart';
import Badge from './components/Badge';
import { AppProps, AppState } from './Interfaces/interfaces';
import { fetchProducts } from './utilities/dataHelpers';
import { findById } from './services/productFunctions';
import { addProductSkuToCart, removeProductSkufromCart } from './services/productFunctions';

class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    cart: {},
    cartQty: 0,
    products: [{}],
  };

  componentDidMount() {
    const products: object[] = fetchProducts();
    this.setState({ products: products });
  }

  addToCart = (productId: string, skuId: string): void => {
    // Make a copy of state to modify
    const productsCopy: object[] = [...this.state.products];

    // Check if this sku is in stock
    const productInStock: any = findById(productId, productsCopy);
    const skuInStock: any = findById(skuId, productInStock.skus);
    const stock: number = skuInStock.stock;

    // If this sku is in stock
    if (stock > 0) {

      // Add one to the cart
      const newCart = addProductSkuToCart(productId, skuId, this.state.cart);
      this.setState({ cart: newCart });

      // Remove one from stock
      skuInStock.stock = skuInStock.stock - 1;
      this.setState({ products: productsCopy, cartQty: this.state.cartQty + 1 });
    }
  }

  removeFromCart = (productId: string, skuId: string): void => {
    // check if this product sku is in the cart
    const productInCart: any = this.state.cart[productId];
    const skuInCart: any = productInCart[skuId];

    // if this product sku is in the cart
    if (skuInCart && skuInCart > 0) {
      // remove one from the cart
      const newCart = removeProductSkufromCart(productId, skuId, this.state.cart);
      this.setState({ cart: newCart });
      // add one to stock
      const productsCopy: object[] = [...this.state.products];
      const productInStock: any = findById(productId, productsCopy);
      const skuInStock: any = findById(skuId, productInStock.skus);
      skuInStock.stock = skuInStock.stock + 1;
      this.setState({ products: productsCopy, cartQty: this.state.cartQty - 1 });
    }
  }

  emptyCart = (): void => {
    // for each product sku in the cart
    // increment its stock value in the product list
    Object.keys(this.state.cart).forEach((productId) => {
      Object.keys(this.state.cart[productId]).forEach((skuId) => {
        const productInCart: any = this.state.cart[productId];
        const skuInCart: any = productInCart[skuId];

        for (let i = 0; i < skuInCart; i++) {
          this.removeFromCart(productId, skuId);
        }
      })
    })
    this.setState({ cart: {}, cartQty: 0 });
  }

  render() {
    return (
      <Router>
        <section>
          <nav id="top-bar">
            <section className="top-bar-section">
              <Link to="/" className="shop-link">Shop</Link>
            </section>
            <section className="top-bar-section">
              <Badge value={this.state.cartQty} />
              <Link to="/cart" className="cart-link">Cart</Link>
            </section>
          </nav>
          <Switch>
            <Route path="/cart">
              <Cart
                appState={this.state}
                emptyCart={this.emptyCart}
                addToCart={this.addToCart}
                removeFromCart={this.removeFromCart}
              />
            </Route>
            <Route path="/">
              <Shopfront
                appState={this.state}
                addToCart={this.addToCart}
              />
            </Route>
          </Switch>
        </section>
      </Router>
    );
  }

}

export default App;