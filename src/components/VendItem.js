import React, { Component } from 'react';
import './VendItem.css';
import AddItem from './AddItem';
import Navbar from './Navbar';

class VendItem extends Component {
   render() {
        return (
            <div className="container">
                <div className="header row">
                    {Navbar("Vendor","VendItem")}
                </div>
                <div className="VendPanel row">
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