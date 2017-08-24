import React, { Component } from 'react';

class MenuItem extends Component {
  render() {
    var image = require('../images/defaultfood.png');
    if (this.props.image != null)  image = this.props.image;
    return (
      <div className="card" >
        <table className="table table-responsive">
          <tbody>
            <tr>
              <td>
                <img className="card-img-top" src={image} alt="Card image cap"></img>
              </td>
              <td>
                <div className="card-block">
                  <td>
                    <h4 className="card-title"><strong>{this.props.name}</strong></h4>
                  </td>
                  <td>
                    <button className="btn btn-primary" onClick={this.props.onAdd}>Add</button>
                  </td>
                  <h3>{this.props.price}</h3>
                  <p className="card-text">{this.props.description}</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MenuItem;