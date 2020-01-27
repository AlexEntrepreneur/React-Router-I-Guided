import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ItemsList from "./components/ItemsList";
import Item from './components/Item';

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
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/items-list">
          <ItemsList/>
        </Route>
        <Route path="/items-list/item">
          <Item />
        </Route>
      </Switch>
		</div>
	);
}

export default App;
