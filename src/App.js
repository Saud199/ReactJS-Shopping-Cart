import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemsList from './components/itemsList.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ItemsList} />
          {/* <Route exact path="/second" component={SecondPage} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;