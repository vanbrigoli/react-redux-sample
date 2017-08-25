import React, { Component } from 'react';
import OrderTile from './OrderTile';
import { formatPrice } from '../utils';
import { connect } from 'react-redux';
import { claimOrder } from '../actions/TrayActions';
import {browserHistory} from 'react-router';
import _ from 'lodash';

class UserOrderList extends Component {

  renderOrders() {
    const { activeOrder } = this.props;
    return activeOrder.orders
      && activeOrder.orders.map((order, index) => (
        <OrderTile key={index} order={order} />
      ));
  }

  HandleClaim(orderNumber) {
    this.props.dispatch(claimOrder(orderNumber))
  }
  
  isInvalidActiveOrder (activeOrder){
    return activeOrder === undefined || _.isEmpty(activeOrder);
  }

  render() {
    const { heading, activeOrder, isVendorView } = this.props;
    const total = activeOrder.totalPrice || 0;

    if (this.isInvalidActiveOrder(activeOrder)) {
        browserHistory.push('/buyer');
        return <div>Redirecting to buyer view.</div>;
    }

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          {heading}
        </div>
        <div className="panel-body">
          <h1>Order #:{activeOrder.orderNumber}</h1>
          <p>By: {activeOrder.user.name}</p>
          <ul className="list-group">
            {this.renderOrders()}
          </ul>
          Total: {formatPrice(total)}
          {isVendorView?<button className="btn btn-primary btn-success pull-right" disabled={activeOrder.isClaimed} onClick={()=>this.HandleClaim(activeOrder.orderNumber)}>Claimed</button>:null}
        </div>
      </div>
    )
  }
}

export default connect()(UserOrderList);