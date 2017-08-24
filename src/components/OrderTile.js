import React from 'react';
import { formatPrice } from '../utils';

const OrderTile = ({ order }) => {
  const { itemName, price, qty = 1} = order;
  const amount = formatPrice(price*qty);

  return (
    <li className="list-group-item">
      <p>{itemName}</p>
      <h4>{amount}</h4>
    </li>
  )
};

export default OrderTile;
