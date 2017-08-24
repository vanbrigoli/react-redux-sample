import React from 'react';
import AddItem from './AddItem';
import VendItemList from './VendItemList';
import './VendorWindow.css';

const VendorWindow = ({vendorItems}) => {
    return (
        <div className="container" style={{marginTop: 50}}>
            <AddItem/>
            <fieldset style={{textAlign: 'center', marginTop: 20}}>
                <legend>Vendor Items</legend>
                <VendItemList vendorItems={vendorItems}/>
            </fieldset>
        </div>
    )
};


export default VendorWindow;