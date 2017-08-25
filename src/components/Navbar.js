import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import './Navbar.css';

class Navbar extends Component {
    render() {
        const path = browserHistory.getCurrentLocation().pathname;
        const vendorClass = path === '/vendor' ? 'active': '';
        const orderListClass = path === '/order-list' ? 'active': '';
        const hiddenClass = path === '/checkout' || path === '/buyer'
            ? "nav navbar-nav hidden"
            : "nav navbar-nav";
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className={hiddenClass}>
                            <li className={vendorClass}><Link to="/vendor">Vendor Window</Link></li>
                            <li className={orderListClass}><Link to="/order-list">Order List</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/">Home</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

};

export default Navbar;