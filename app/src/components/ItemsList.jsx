import React from 'react';

function ItemsList() {
	return (
		<div className="items-list-wrapper">
			{[].map(item => (
					<div className="item-card">
						<img
							className="item-list-image"
							src={item.imageUrl}
							alt={item.name}
						/>
						<p>{item.name}</p>
						<p>${item.price}</p>
					</div>
			))}
		</div>
	);
}

export default ItemsList;