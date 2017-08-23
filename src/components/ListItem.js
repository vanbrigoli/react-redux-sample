import React, { Component } from 'react';
import listStore from './../store/ListStore';
import { deleteItem, toggleId } from './../actions/TodoActions';
import './Buyer.css';

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
                <div className="row">
                    <div className="col-item col-sm-9">
                        <span>{this.props.item.title}</span>
                    </div>
                    <div className="col-del col-sm-1">
                        <button className="btn btn-primary" onClick={this.handleDelete.bind(this)}>
                            Delete
                        </button>
                    </div>
                </div>
            </a>
        )
    }
}

export default ListItem;