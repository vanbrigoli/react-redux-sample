import React from 'react';
import { formatPrice } from '../utils';

const OrderTile = ({ order }) => {
  const { id, itemName, price, qty = 1} = order;
  const amount = formatPrice(price*qty);

  return (
    <li className="list-group-item">
      <div className="card">
        <p><b>#{id}</b> {itemName} x{qty}</p>
        <h4>{amount}</h4>
      </div>
    </li>
  )
};

export default OrderTile;
