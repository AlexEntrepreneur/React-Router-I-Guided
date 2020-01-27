import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import ItemsList from './components/itemsList';
import Item from './components/item';
import TestRouteParams from './components/TestParams';

function App() {
	return (
		<div className="App">
			<nav>
				<Link className="some-link" to="/">
					<h1 className="store-header">Alex's Trinkets</h1>
				</Link>
				<div className="nav-links">
          <Link className="some-link" to="item-list">
            Shop
          </Link>
        </div>
			</nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/item-list">
          <ItemsList />
        </Route>
        <Route path="/item-list/:itemId">
          <Item />
        </Route>
        <Route path="/test/:banana">
          <TestRouteParams />
        </Route>
      </Switch>
		</div>
	);
}

export default App;
