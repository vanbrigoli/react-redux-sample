import React, { Component } from 'react';
import OrderTile from './OrderTile';
import { formatPrice } from '../utils';

export default class UserOrderList extends Component {
  renderOrders() {
    const orders = consolidateOrders(this.props.activeOrder.orders);

    return Object.keys(orders).map(orderNumber => {
      return <OrderTile key={orderNumber} order={orders[orderNumber]} />
    })
  }

  render() {
    const { heading, user, activeOrder } = this.props;
    const total = activeOrder.totalPrice || 0;

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          {heading}
        </div>
        <div className="panel-body">
          <p>Order #:{activeOrder.orderNumber}</p>
          <p>By: {user.name}</p>
          <ul className="list-group">
            {this.renderOrders()}
          </ul>

          Total: {formatPrice(total)}
        </div>
      </div>
    )
  }
}

function consolidateOrders (orderList) {
  const orders = {};
   orderList && orderList.forEach(order => {
    const existingOrder = orders[order.id];
    if (existingOrder) {
      const qty = ++existingOrder.qty;
      orders[order.id] = {
        ...existingOrder,
        qty
      };
    } else {
      orders[order.id] = {
        ...order,
        qty: 1
      }
    }
  });

  return orders;
}
