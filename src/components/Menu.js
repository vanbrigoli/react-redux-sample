import React, {Component} from 'react';
import{connect} from 'react-redux';
import {addItem} from '../actions/TrayActions';


import MenuItem from './MenuItem';


class Menu extends Component {

    renderList(){
        console.log(this.props.menuList);
        return this.props.menuList.map((menuItem)=>{
            return (
                <MenuItem key={menuItem.id} item={menuItem} onAdd={(item)=>{this.props.addMenuItem(item)}}/>
            )
        })
    }
    render(){
        return(
            <div>
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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);