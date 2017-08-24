import React, { Component } from 'react';
import OrderTile from './OrderTile';
import { formatPrice } from '../utils';

export default class UserOrderList extends Component {
  renderOrders() {
    return this.props.activeOrder.orders
      && this.props.activeOrder.orders.map(order => (<OrderTile key={order.id} order={order} />))
  }

  render() {
    const { heading, user, activeOrder } = this.props;
    console.log(activeOrder)
    const total = activeOrder.totalPrice || 0;

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          {heading}
        </div>
        <div className="panel-body">
          Order ni: {user.name}
          <ul className="list-group">
            {this.renderOrders()}
          </ul>

          Total: {formatPrice(total)}
        </div>
      </div>
    )
  }
}
