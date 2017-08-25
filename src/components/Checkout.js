import React from 'react';
import UserOrderList from './UserOrderList';
import Navbar from './Navbar';

const Checkout = () => {
    return (
        <div>
            <div className="container">
                <Navbar/>
                <div className="row" style={{marginTop: 50}}>
                    <UserOrderList/>
                </div>
            </div>
        </div>
    )
};

export default Checkout;
