import React from 'react';
import TrayItem from './TrayItem';
import SubmitOrderBtn from './SubmitOrderBtn';
import { connect } from 'react-redux';
import { submitOrder, removeItem, rollbackOrder } from './../actions/TrayActions';

const Tray = ({currentOrder, getTotal, onSubmit, onRemove}) => {
    if(currentOrder.length !== 0) {
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
                <div className="alert alert-success"><span>TOTAL: Php. </span>{getTotal()}</div>
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
            let total = 0;
            for(let item of state.currentOrderList) {
                total += item.price;
            }
            return total;
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
