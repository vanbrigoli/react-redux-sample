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
            <div className="input-group ">
                <input ref={node => {
                    this.input = node
                }} type="text" className="form-control" placeholder="Item Name"/>
                <input ref={node => {
                    this.input = node
                }} type="text" className="form-control" placeholder="Price"/>
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button" onClick={this.handleSubmit.bind(this)}>Add</button>
                </span>
            </div>
        )
    }
};

export default AddItem;