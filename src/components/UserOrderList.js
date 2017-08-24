import React, { Component } from 'react';
import { connect } from 'react-redux'
import OrderList from './OrderList';

class UserOrderList extends Component {
  render () {
    const orderInfo = {
      heading: "Your order",
      user: {
        id: 1,
        name: "Hubs"
      },
      activeOrder: this.props.activeOrder
    };

    return (
      <OrderList {...orderInfo} />
    )
  }
}

function mapStateToProps(state) {
  const activeOrder = state.orderList.find((order) => state.activeOrder === order.orderNumber) || {};
  return {
    activeOrder
  }
}

export default connect(mapStateToProps)(UserOrderList);
