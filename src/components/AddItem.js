import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import {addItem} from './../actions/TodoActions';
import './AddItem.css';

class AddItem extends Component {
  renderField(field) {
    const { meta: {touched, error} } = field;
    const className = `form-group col-md-3 ${touched && error ? 'has-error': ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          {...field.input}
          placeholder={field.label}
          type={field.type}/>
        <span className="help-block">
          {touched ? error : ''}
        </span>
      </div>
    );
  }

  onSubmit(values) {
    values.price = Number(values.price);
    this.props.addItem(values);
    reset('AddItem');
    // if (!this.input.value.trim()) {
    //     return;
    // }
    // listStore.dispatch(addItem(this.input.value));
    // this.input.value = '';
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <form className="Add-Item-form form-inline" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className="row">
          <Field
            label="Item name"
            name="itemName"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Price"
            name="price"
            type="number"
            component={this.renderField}
          />
          <div className="col-md-2">
            <button type="submit" className="btn btn-primary">Add Item</button>
          </div>
        </div>
      </form>
    )
  }
}

function validate(values) {
  const errors = {};
  if (!values.itemName) {
    errors.itemName = 'Enter an item name';
  }

  if (!values.price) {
    errors.price = 'Please enter a valid price';
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'AddItem'
})(connect(null, {addItem})(AddItem));