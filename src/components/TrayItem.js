import React, { Component } from 'react';

class TrayItem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.order.itemName}</td>
                <td>{this.props.order.price}</td>
                <td>
                    <button className="btn btn-warning" onClick={this.props.onRemove}>Remove</button>
                </td>
            </tr>
        )
    }
}

export default TrayItem;
