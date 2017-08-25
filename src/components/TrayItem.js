import React, { Component } from 'react';
import { formatPrice } from './../utils';

class TrayItem extends Component {
    render() {
        const { itemName, qty, price } = this.props.order;
        return (
            <tr>
                <td>{itemName}</td>
                <td>
                  <span style={{ width: '50px' }}>{qty}</span>
                </td>
                <td>{formatPrice(price * qty)}</td>
                <td>
                    <div className="btn-group" role="group">
                        <a className="btn btn-default btn-xs">
                            <span className="glyphicon glyphicon-plus" aria-hidden="true" onClick={this.props.onAddOne}/>
                        </a>
                        <a className="btn btn-default btn-xs">
                            <span className="glyphicon glyphicon-minus" aria-hidden="true" onClick={this.props.onRemoveOne}/>
                        </a>
                        <a className="btn btn-default btn-xs">
                            <span className="glyphicon glyphicon-trash" aria-hidden="true" onClick={this.props.onRemove}/>
                        </a>
                    </div>
                </td>
            </tr>
        )
    }
}

export default TrayItem;
