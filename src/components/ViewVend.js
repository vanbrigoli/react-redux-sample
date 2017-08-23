import React, { Component } from 'react';
import { Link } from 'react-router';
import './ViewVend.css';

class ViewVend extends Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <div className="table">
                        <ul>
                            Goto:
                            <li><Link to="/" className="btn btn-success">Home</Link></li>
                            <li><Link to="/vendItem" className="btn btn-success">Vend an Item</Link></li>
                            <li><Link to="/vendor" className="btn btn-success disabled">View Vending List</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="VendPanel">
                    <fieldset>
                        <legend>Vending List</legend>
                        {/*Hardcoded mockups | Placeholders*/}
                        <table className="table table-bordered table-responsive">
                            <thead>
                                <tr>
                                    <th>Order</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> item 1 </td>
                                    <td> 500 </td>
                                    <td> 
                                        <button className="btn btn-danger"> Remove </button> 
                                    </td>
                                </tr>
                                <tr>
                                    <td> item 2 </td>
                                    <td> 500 </td>
                                    <td> 
                                        <button className="btn btn-danger"> Remove </button> 
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </fieldset>
                </div>
            </div>
        );
    }
}

export default ViewVend;