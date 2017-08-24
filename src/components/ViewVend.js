import React, { Component } from 'react';
import './ViewVend.css';
import Navbar from './Navbar';

class ViewVend extends Component {
    render() {
        return (
            <div className="container">
                <div className="header row">
                    {Navbar("Vendor","ViewVend")}
                </div>
                <div className="row VendPanel">
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