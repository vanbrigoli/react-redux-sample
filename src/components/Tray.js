import React from 'react';
import TrayItem from './TrayItem';
import SubmitOrderBtn from './SubmitOrderBtn';
import { connect } from 'react-redux';
import { formatPrice } from './../utils';
import { submitOrder, removeItem, rollbackOrder } from './../actions/TrayActions';

const Tray = ({currentOrder, getTotal, onSubmit, onRemove}) => {
    if(currentOrder.length !== 0) {
        return (
            <div>
                <table className="table table-bordered table-responsive">
                    <thead>
                    <tr>
                        <th>Order</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    { currentOrder.map((order, index) => (
                      <TrayItem order={order} key={index} onRemove={() => onRemove(order.id)}/>)
                    )}
                    </tbody>
                </table>
                <div className="alert alert-success"><span>TOTAL: </span><strong>{formatPrice(getTotal())}</strong></div>
                <SubmitOrderBtn onClick={() => onSubmit(currentOrder, getTotal())}/>
            </div>
        )
    }
    return <div>No orders yet.</div>
};

const mapStateToProps = state => {
    return {
        currentOrder: state.currentOrderList,
        getTotal: () => {
            return state.currentOrderList.reduce((totalPrice, currentOrder) => {
                return totalPrice + (currentOrder.price * currentOrder.qty);
            }, 0)
        }
    }
};

const mapDispatchToProps  = dispatch => {
    return {
        onSubmit: (itemList, total) => {
            dispatch(submitOrder(itemList, total));
            dispatch(rollbackOrder());
        },
        onRemove: (id) => {
            dispatch(removeItem(id));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Tray);;
