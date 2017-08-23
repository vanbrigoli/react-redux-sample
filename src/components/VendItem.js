import React, { Component } from 'react';
import { Link } from 'react-router';
import './VendItem.css';
import AddItem from './AddItem';

class VendItem extends Component {
   render() {
        return (
            <div className="container">
                <div className="header">
                    <div className="table">
                        <ul>
                            Goto:
                            <li><Link to="/" className="btn btn-success">Home</Link></li>
                            <li><Link to="/vendItem" className="btn btn-success disabled">Vend an Item</Link></li>
                            <li><Link to="/vendor" className="btn btn-success">View Vending List</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="VendPanel">
                    {/*Hardcoded mockups | placeholders*/}
                    <fieldset>
                        <legend>Vend an Item</legend>
                        <AddItem />
                    </fieldset>
                </div>
            </div>
        );
    }
}

export default VendItem;