import React, { Component } from 'react';

class MenuItem extends Component {
  render() {
    var image = require('../images/defaultfood.png');
    if (this.props.item.image != null)  image = this.props.item.image;
    return (
      <div className="card" >
        <table className="table table-responsive">
          <tbody>
            <tr>
              <td>
                <img className="card-img-top" src={image} alt={this.props.item.itemName}></img>
              </td>
              <td className="card-block">
                <h4 className="card-title"><strong>{this.props.item.itemName}</strong></h4>
                <button className="btn btn-primary" onClick={()=>this.props.onAdd(this.props.item)}>Add</button>
                <h3>{this.props.item.price}</h3>
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