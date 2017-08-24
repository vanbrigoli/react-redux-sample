import React from 'react';
import { Link } from 'react-router';
import './Navbar.css';

const CheckNavState = (group,page,NavItem) => {
    var endState = "btn btn-success ";
    if (group !== "Vendor") {
        endState = endState + "hide";
        return endState;
    }
    if (page === NavItem) {
        endState = endState + "disabled";
    }
    return endState;
}

const Navbar = (group="",page="") => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="table table-responsive">
                <ul>
                    <li><Link to="/" className="btn btn-success">Home</Link></li>
                    <li><Link to="/vendItem" className={CheckNavState(group,page,"VendItem")}>Vend an Item</Link></li>
                    <li><Link to="/vendor" className={CheckNavState(group,page,"ViewVend")}>View Vending List</Link></li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;