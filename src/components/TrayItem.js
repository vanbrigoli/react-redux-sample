import React, { Component } from 'react';
import { formatPrice } from './../utils';

class TrayItem extends Component {
    render() {
        const { itemName, qty, price } = this.props.order;
        return (
            <tr>
                <td>{itemName}</td>
                <td>{qty}</td>
                <td>{formatPrice(price * qty)}</td>
                <td>
                    <button className="btn btn-warning" onClick={this.props.onRemove}>Remove</button>
                </td>
            </tr>
        )
    }
}

export default TrayItem;
