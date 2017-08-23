import React, { Component } from 'react';
import { Link } from 'react-router';
import './ViewVend.css';

class ViewVend extends Component {
    render() {
        return (
            <div className="container VendPanel">
                <div className="header">
                    <div className="table">
                        <ul>
                            Goto:
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/vendItem" >Vend an Item</Link></li>
                            <li>View Vending List</li>
                        </ul>
                    </div>
                </div>
                {/*Hardcoded mockups | Placeholders*/}
                <fieldset>
                    <legend>Food List</legend>
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
        );
    }
}

export default ViewVend;