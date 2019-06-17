import React from 'react';

import items from '../data';

function ItemsList() {
  return (
    <div className="items-list-wrapper">
      {items.map(item => (
        <div className="item-card" key={item.id}>
          <img
            className="item-list-image"
            src={item.imageUrl}
            alt={item.name}
          />
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemsList;
