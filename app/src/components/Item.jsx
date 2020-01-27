import React from 'react';
import { useParams } from 'react-router-dom';

function Item() {
  const item = {};
  const { itemId } = useParams();
	return (
		<div className="item-wrapper">
      <h1>My Param: {itemId}</h1>
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
