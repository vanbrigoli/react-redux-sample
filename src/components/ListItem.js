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
        var Price = 500;
        return (
                 <div className="card">
                    <div className="card-block">
                        <div className="container-fluid">
                            <div className="row">
                                <table className="table table-hover">
                                    <tr>
                                        <td>{this.props.item.title}</td>
                                        <td>Php {Price}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={this.handleDelete.bind(this)}>X</button>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default ListItem;