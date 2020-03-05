import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Shopfront from './pages/Shopfront';
import Cart from './pages/Cart';
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
    const productsCopy: object[] = [ ...this.state.products ];
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
      skuInStock.stock = skuInStock.stock -1;
      console.log(productsCopy);
      this.setState({ products: productsCopy });
    }

  }

  componentDidUpdate() {
    console.log('cart', this.state.cart);
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Shop</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/">
              <Shopfront
                appState={this.state}
                addToCart={this.addToCart}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;