import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import items from '../data';

function Item() {
  const { itemId } = useParams();
	const item = items.find(item => item.id.toString() === itemId);
  
  // receiving item through through Link location state
  // const { state } = useLocation();
  // const item = state.item;

  // In reality we may do another axios request for the single item in a useEffect

	return (
		<div className="item-wrapper">
			<div className="item-header">
				<div className="image-wrapper">
					<img src={item.imageUrl} alt={item.name} />
				</div>
				<div className="item-title-wrapper">
					<h2>{item.name}</h2>
					<h4>${item.price}</h4>
				</div>
			</div>
			<div>
				<p className="item-description">{item.description}</p>
			</div>
		</div>
	);
}

export default Item;
