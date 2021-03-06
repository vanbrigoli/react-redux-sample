import React from 'react';
import AddItem from './AddItem';
import VendItemList from './VendItemList';
import './VendorWindow.css';

const VendorWindow = ({vendorItems}) => {
    return (
        <div className="container" style={{marginTop: 50}}>
            <fieldset style={{textAlign: 'center', marginTop: 20}}>
              <legend>Add New Item</legend>
              <AddItem/>
            </fieldset>
            <fieldset style={{textAlign: 'center', marginTop: 20}}>
                <legend>Vendor Items</legend>
                <VendItemList vendorItems={vendorItems}/>
            </fieldset>
        </div>
    )
};


export default VendorWindow;