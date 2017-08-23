import React, { Component } from 'react';
import { Link } from 'react-router';
import './VendItem.css';
import AddItem from './AddItem';
class VendItem extends Component {
   render() {
        return (
            <div className="container VendPanel">
                <div className="header">
                    <div className="table">
                        <ul>
                            Goto:
                            <li><Link to="/">Home</Link></li>
                            <li>Vend an Item</li>
                            <li><Link to="/vendor" >View Vending List</Link></li>
                        </ul>
                    </div>
                </div>
                {/*Hardcoded mockups | placeholders*/}
                <fieldset>
                    <legend>Vend an Item</legend>
                    <AddItem />
                </fieldset>
            </div>
        );
    }
}

export default VendItem;