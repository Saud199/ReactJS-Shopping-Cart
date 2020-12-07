import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemsList from './components/itemsList.js';
import ShoppingCart from './components/shoppingCart.js'
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={ItemsList} />
            <Route exact path="/cart" component={ShoppingCart} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;