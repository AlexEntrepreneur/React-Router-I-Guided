import React from 'react';

function ItemsList() {
	return (
    <div className="items-list-wrapper">
    <h1>Hello from ItemsList</h1>
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