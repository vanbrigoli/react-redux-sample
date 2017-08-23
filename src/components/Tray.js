import React from 'react';
import TrayItem from './TrayItem';
import SubmitOrderBtn from './SubmitOrderBtn';
import { connect } from 'react-redux';
import { submitOrder, removeItem, rollbackOrder } from './../actions/TrayActions';

const Tray = ({currentOrder, onSubmit, onRemove}) => {
    if(currentOrder.length !== 0) {
        let total = getTotal(currentOrder);
        return (
            <div>
                <table className="table table-bordered table-responsive">
                    <thead>
                    <tr>
                        <th>Order</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    { currentOrder.map((order) => (<TrayItem order={order} key={order.id} onRemove={() => onRemove(order.id)}/>))}
                    </tbody>
                </table>
                <div className="alert alert-success"><span>TOTAL: Php. </span>{total}</div>
                <SubmitOrderBtn onClick={() => onSubmit(currentOrder, total)}/>
            </div>
        )
    }
    return <div>No orders yet.</div>
};

let getTotal = orders => {
    let total = 0;
    for(let item of orders) {
        total += item.price;
    }
    return total;
}

const mapStateToProps = state => {
    console.log("STATE ", state);
    return {
        currentOrder: state.currentOrderList
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
