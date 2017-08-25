import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import CurrencyInput from 'react-currency-input';

import { addItem } from './../actions/TodoActions';
import { getRawPrice } from '../utils';
import './AddItem.css';

const PESO_SIGN = "₱";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {addedFood:null};
  }

  onSubmit(values) {
    values.price = getRawPrice(values.price);
    this.setState({
      addedFood:{...values}
    });
    this.props.addItem(values);

    this.props.reset();
  }

  renderAlert() {
    const {addedFood} = this.state;
    return !addedFood ? '' : (
      <div className="alert alert-success">
        Successfully added {addedFood.itemName}!
      </div>
    )
  }

  renderField(field) {
    const { meta: {touched, error} } = field;
    const className = `form-group col-md-3 ${touched && error ? 'has-error': ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <field.tag
          className="form-control"
          {...field.input}
          placeholder={field.placeholder}
          type={field.type}/>
        <span className="help-block">
          {touched ? error : ''}
        </span>
      </div>
    );
  }

  renderCurrencyInput(field) {
    const { meta: {touched, error} } = field;
    const className = `form-group col-md-3 ${touched && error ? 'has-error': ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <CurrencyInput
          className="form-control"
          {...field.input}
          prefix={PESO_SIGN}/>
        <span className="help-block">
          {touched ? error : ''}
        </span>
      </div>
    );
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <form className="Add-Item-form form-inline" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className="row">
          {this.renderAlert()}
        </div>
        <div className="row">
          <Field
            label="Item name"
            name="itemName"
            placeholder="Enter food here"
            tag="input"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Price"
            name="price"
            type="number"
            component={this.renderCurrencyInput}
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

  if (!getRawPrice(values.price)) {
    errors.price = 'Please enter a valid price';
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'AddItem'
})(connect(null, {addItem})(AddItem));