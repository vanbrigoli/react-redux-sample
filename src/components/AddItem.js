import React, { Component } from 'react';
import listStore from './../store/ListStore';
import { addItem } from './../actions/TodoActions';
import './AddItem.css';
class AddItem extends Component {
    input;
    handleSubmit(event) {
        event.preventDefault();
        if (!this.input.value.trim()) {
            return;
        }
        listStore.dispatch(addItem(this.input.value));
        this.input.value = '';
    }
    render() {
        return (
            <div className="input-group">
                <input ref={node => {
                    this.input = node
                }} type="text" className="form-control" placeholder="Add item"/>
                <span className="input-group-btn">
                <button className="btn btn-primary" type="button" onClick={this.handleSubmit.bind(this)}>Add</button>
              </span>
            </div>
        )
    }
};

class AlertThis extends Component {
    render() {
        var OrderID = 500;
        return (
            <div className="alert alert-success">
                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">
                    ×</button>
                <span className="glyphicon glyphicon-info-sign"></span> <strong>Info Message</strong>
                <hr className="message-inner-separator"/>
                <p>
                    Your order ID: <strong>{OrderID}</strong> has been placed.<br/>Please wait for your queue.
                </p>
            </div>
        )

    }
}

export {
    AlertThis,
    AddItem
}