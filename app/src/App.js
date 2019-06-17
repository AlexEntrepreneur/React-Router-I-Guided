import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ItemsList from './components/itemsList';

import data from './data';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.setState({ items: data });
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Link className="some-link" to="/">
            <h1 className="store-header">Trinkets</h1>
          </Link>
          <div className="nav-links" />
          <Link className="some-link" to="item-list">Shop</Link>
        </nav>

        <Route exact path="/" component={Home} />
        <Route exact path="/item-list" component={ItemsList} />
      </div>
    );
  }
}

export default App;
