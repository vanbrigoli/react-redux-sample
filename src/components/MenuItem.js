import React, { Component } from 'react';
import { formatPrice } from './../utils';

class MenuItem extends Component {
  render() {
    var image = require('../images/defaultfood.png');
    if (this.props.item.image != null)  image = this.props.item.image;
    return (
      <div className="card" >
        <table className="table table-responsive table-bordered">
          <tbody>
            <tr>
              <td>
                <img className="img-responsive" src={image} alt={this.props.item.itemName}/>
                <p style={{textAlign: 'center', marginTop: 15}}>Item No. <strong>{this.props.item.id}</strong></p>
              </td>
              <td className="card-block">
                <h4 className="card-title"><strong>{this.props.item.itemName}</strong></h4>
                <button className="btn btn-primary" onClick={()=>this.props.onAdd(this.props.item)}>{this.props.btnName}</button>
                <h3>{formatPrice(this.props.item.price)}</h3>
                <p className="card-text">{this.props.item.description}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MenuItem;