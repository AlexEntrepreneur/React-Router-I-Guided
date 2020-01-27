import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';

function App() {
	return (
		<div className="App">
			<nav>
				<h1 className="store-header">Trinkets</h1>
        <div className="nav-links">
          <a href="#">
            Shop
          </a>
        </div>
			</nav>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        {/* path = '/items-list', ItemList */}
      </Switch>
		</div>
	);
}

export default App;
