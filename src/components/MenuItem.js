import React, { Component } from 'react';
import { formatPrice } from './../utils';

class MenuItem extends Component {
  render() {
    var image = require('../images/defaultfood.png');
    if (this.props.item.image != null)  image = this.props.item.image;
    return (
      <div className="media">
        <div className="media-left">
          <img src={image} alt={this.props.item.itemName} className="media-object"/>
          <p style={{textAlign: 'center', marginTop: 15}}>Item No. <strong>{this.props.item.id}</strong></p>
        </div>
        <div className="media-body text-left">
          <h4 className="card-title"><strong>{this.props.item.itemName}</strong></h4>
          <h3>{formatPrice(this.props.item.price)}</h3>
          <p className="card-text">{this.props.item.description}</p>
          <button className={`btn ${this.props.btnType}`} onClick={()=>this.props.onAdd(this.props.item)}>{this.props.btnName}</button>
        </div>
      </div>
    );
  }
}

export default MenuItem;