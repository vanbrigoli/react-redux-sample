 import React, { Component } from 'react';
 import listStore from './../store/ListStore';
 import { deleteItem, toggleId } from './../actions/TodoActions';

 class ListItem extends Component {
    handleDelete(event){
        listStore.dispatch(deleteItem(this.props.item.id));
        event.preventDefault();
        event.stopPropagation();
    }

    handleToggle(event){
        listStore.dispatch(toggleId(this.props.item.id));
        event.preventDefault();
    }
    render() {
        return (
            <a className="list-group-item" onClick={this.handleToggle.bind(this)}>
                <span style={{ textDecoration: this.props.item.completed ? 'line-through' : 'none' }}>{this.props.item.title}</span>
                <button className="btn btn-primary" onClick={this.handleDelete.bind(this)}>
                    Delete
                </button>
            </a>
        )
    }
 }

 export default ListItem;