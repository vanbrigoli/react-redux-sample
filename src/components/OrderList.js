import React, { Component } from 'react';
import OrderTile from './OrderTile';
import { formatPrice } from '../utils';

export default class UserOrderList extends Component {
  renderOrders() {
    const { activeOrder } = this.props;
    return activeOrder.orders
      && activeOrder.orders.map((order, index) => (
        <OrderTile key={index} order={order} />
      ));
  }

  render() {
    const { heading, activeOrder } = this.props;
    const total = activeOrder.totalPrice || 0;

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          {heading}
        </div>
        <div className="panel-body">
          <p>Order #:{activeOrder.orderNumber}</p>
          <p>By: {activeOrder.user.name}</p>
          <ul className="list-group">
            {this.renderOrders()}
          </ul>

          Total: {formatPrice(total)}
        </div>
      </div>
    )
  }
}

