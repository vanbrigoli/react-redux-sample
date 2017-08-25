import React, { Component } from 'react';
import Tray from './Tray';
import Menu from './Menu';
import './Buyer.css';
import Navbar from './Navbar';

export default class Buyer extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Navbar/>
                    <div className="row VendPanel">
                        <div className="col-sm-6">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Food Menu</h3>
                                </div>
                                <div className="panel-body">
                                    <Menu />
                                </div>
                            </div>
                        </div> 
                        <div className="col-sm-6">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Tray</h3>
                                </div>
                                <div className="panel-body">
                                    <Tray/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );        
    }
}


