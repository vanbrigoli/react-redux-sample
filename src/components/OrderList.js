import React, { Component } from 'react';
import OrderTile from './OrderTile';
import { formatPrice } from '../utils';

export default class UserOrderList extends Component {
  renderOrders() {
    return this.props.orders.map(order => (<OrderTile key={order.id} order={order} />))
  }

  render() {
    const { heading, ...orderInfo } = this.props;
    const total = orderInfo.orders
      .reduce((currentValue, order) => {
        const orderPrice = order.price * order.qty;
        return orderPrice + currentValue;
      }, 0);

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          {heading}
        </div>
        <div className="panel-body">
          Order ni: {orderInfo.user.name}
          <ul className="list-group">
            {this.renderOrders()}
          </ul>

          Total: {formatPrice(total)}
        </div>
      </div>
    )
  }
}
