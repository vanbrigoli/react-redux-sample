import React from 'react';
import { Link } from 'react-router';
import UserOrderList from './UserOrderList';

const Checkout = () => {
    return (
        <div>
            <Link to="/" className="btn btn-success">Home</Link>
            <div className="container">
              <UserOrderList/>
            </div>
        </div>
    )
};

export default Checkout;
