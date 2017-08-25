import React from 'react'
import MenuItem from './MenuItem';
import { removeVendorItem } from './../actions/VendorActions';
import {connect} from 'react-redux';

const VendItemList = ({vendorItems, onRemove}) => {
    if(vendorItems.length !== 0) {
        return (
            <div className="row">
                {vendorItems.map((item) => (
                    <div key={item.id} className="col-md-4" style={{ height: '240px' }}>
                        <MenuItem item={item}>
                            <button className="btn btn-danger" onClick={()=>onRemove(item.id)}>Remove</button>
                        </MenuItem>
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
