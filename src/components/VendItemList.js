import React from 'react'
import MenuItem from './MenuItem';
import { removeVendorItem } from './../actions/VendorActions';
import {connect} from 'react-redux';

const VendItemList = ({vendorItems, onRemove}) => {
    if(vendorItems.length !== 0) {
        console.log("WINDOW ", window);
        return (
            <div className="row">
                {vendorItems.map((item) => (
                    <div className="col-md-4" style={{height: 200}}>
                        <MenuItem key={item.id} item={item} btnName="Remove" onAdd={(item)=>{onRemove(item.id)}}/>
                    </div>
                ))}
            </div>
        )
    }
    return <div>No vendor items yet.</div>
};

const mapStateToProps = state => {
    return {
        vendorItems: state.vendItemList
    }
};

const mapDispatchToProps  = dispatch => {
    return {
        onRemove: (id) => {
            dispatch(removeVendorItem(id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(VendItemList);
