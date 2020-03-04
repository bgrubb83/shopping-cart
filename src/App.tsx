import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Shopfront from './pages/Shopfront';
import Cart from './pages/Cart';

export default function App() {
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
            <Shopfront />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}