import React, { Component } from 'react';
import AddItem from './AddItem';
import VendItemList from './VendItemList';
import './VendItem.css';

class VendItem extends Component {
   render() {
        return (
            <div className="container" style={{marginTop: 50}}>
                <AddItem/>
                <VendItemList/>
            </div>
        );
    }
}

export default VendItem;