import React, { Component } from 'react';
import { Link } from 'react-router';

class SubmitOrderBtn extends Component {
    render() {
        return (
            <Link to="/checkout" className="btn btn-success" onClick={this.props.onClick}>Submit Order</Link>
        )
    }
}

export default SubmitOrderBtn;
