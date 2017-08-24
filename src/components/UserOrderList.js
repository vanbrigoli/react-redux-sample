import React, { Component } from 'react';
import { connect } from 'react-redux'
import OrderList from './OrderList';

const TEST_DATA = {
  heading: "Your order",
  user: {
    id: 1,
    name: "Hubs"
  },
  orders: [
    {
        itemName: 'TEST 1',
        price: 500,
        id: 1,
        qty: 3
    },
    {
        itemName: 'TEST 2',
        price: 500,
        id: 2,
        qty: 3
    },
    {
        itemName: 'TEST 3',
        price: 500,
        id: 3,
        qty: 3
    }
  ]
};

class UserOrderList extends Component {
  render () {
    return (
      <OrderList {...this.props.test_props} />
    )
  }
}

function mapStateToProps() {
  return {
    test_props: { ...TEST_DATA }
  }
}

export default connect(mapStateToProps)(UserOrderList);
