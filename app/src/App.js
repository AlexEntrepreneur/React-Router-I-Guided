import React from 'react';

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
          <h1 className="store-header">Trinkets</h1>
          <div className="nav-links" />
        </nav>
      </div>
    );
  }
}

export default App;
