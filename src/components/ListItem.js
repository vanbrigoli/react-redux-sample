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
                <div className="card">
                    <div className="card-block">
                            <div className="row">
                                <div className="col-md-8">
                                    {this.props.item.title}
                                </div>
                                <div className="col-md-1">
                                    <button className="btn btn-primary" onClick={this.handleDelete.bind(this)}>
                                            X
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </a>
        )
    }
}

export default ListItem;