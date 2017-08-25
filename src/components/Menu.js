import React, {Component} from 'react';
import{connect} from 'react-redux';
import {addItem} from '../actions/TrayActions';
import {sortMenuItems} from '../actions/TrayActions';
import './Menu.css';

import MenuItem from './MenuItem';

class Menu extends Component {

    renderList(){
        return this.props.menuList.map((menuItem)=>{
            return (
                <MenuItem key={menuItem.id} item={menuItem}>
                    <button className="btn btn-primary" onClick={()=>this.props.addMenuItem(menuItem)}>Add</button>
                </MenuItem>
            )
        })
    }

    render(){
        return(
            <div>
                Sort by:
                <button className="btn btn-link" onClick={() => this.props.onSortMenuItems('price')}> Price </button>|
                <button className="btn btn-link" onClick={() => this.props.onSortMenuItems('itemName')}> Name </button>
                <div id="menu-container">
                    {this.renderList()}
                </div>
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