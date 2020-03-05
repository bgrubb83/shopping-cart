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
// import {
//   addToCart,
//   removeFromCart,
//   incrementQty,
//   decrementQty,
//   emptyCart
// } from './services/cartFunctions';

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

  /* 
  
  state.cart = {
    PRODUCT_ID: {
      SKU:ID: 10, // qty
    }
  }
  
  state.products
  
  */

  addToCart = (productId: string, skuId: string) => {
    // Make a copy of state to modify
    const productsCopy: object[] = [...this.state.products];
    // Check if this sku is still in stock
    const productInStock: any = productsCopy?.find((product: any) => {
      return product.id === productId;
    })
    const skuInStock = productInStock!.skus.find((sku: any) => {
      return sku.id === skuId;
    })
    const stock: number = skuInStock.stock;

    // If this sku is in stock
    if (stock > 0) {
      // add one to the cart
      const productInCart = this.state.cart[productId];
      let qtyInCart: number;
      if (productInCart && productInCart[skuId]) {
        qtyInCart = productInCart[skuId];
      } else {
        qtyInCart = 0;
      }
      const updatedProduct = { ...productInCart }
      updatedProduct[skuId] = qtyInCart + 1;
      const newCart = { ...this.state.cart }
      newCart[productId] = updatedProduct;
      this.setState({ cart: newCart });

      // remove one from stock
      skuInStock.stock = skuInStock.stock - 1;
      this.setState({ products: productsCopy, cartQty: this.state.cartQty + 1 });
    }
  }

  emptyCart = () => {
    this.setState({ cart: {}, cartQty: 0 });
  }

  componentDidUpdate() {
    console.log('cart', this.state.cart);
  }

  render() {
    return (
      <Router>
        <section>
          <nav id="top-bar">
            <section className="top-bar-section">
              <Link to="/">Shop</Link>
            </section>
            <section className="top-bar-section">
              <Badge value={this.state.cartQty} />
              <Link to="/cart">Cart</Link>
            </section>
          </nav>

          <Switch>
            <Route path="/cart">
              <Cart
                appState={this.state}
                emptyCart={this.emptyCart}
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