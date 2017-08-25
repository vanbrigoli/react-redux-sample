import React, {Component} from 'react';
import{connect} from 'react-redux';
import {addItem} from '../actions/TrayActions';
import {sortMenuItems} from '../actions/TrayActions';

import MenuItem from './MenuItem';

class Menu extends Component {

    renderList(){
        return this.props.menuList.map((menuItem)=>{
            return (
                <MenuItem key={menuItem.id} item={menuItem} btnName="Add" btnType="btn-primary" onAdd={(item)=>{this.props.addMenuItem(item)}}/>
            )
        })
    }

    render(){
        return(
            <div>
                Sort by:
                <button className="btn btn-link" onClick={() => this.props.onSortMenuItems('price')}> Price </button>|
                <button className="btn btn-link" onClick={() => this.props.onSortMenuItems('itemName')}> Name </button>
                {this.renderList()}
            </div>
        );
    }

}

function mapStateToProps (state) {
    return{
        menuList: state.vendItemList
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addMenuItem: (item) => {
            dispatch(addItem(item))
        },
        onSortMenuItems: (sortType) => {
            dispatch(sortMenuItems(sortType))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);