import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './components/Home';

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

        </nav>

        <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default App;
