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
    SKU:ID: {
      qty: 10,
      price: 10,
    }
  }
}

state.products

*/

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
              <Shopfront appState={this.state} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;