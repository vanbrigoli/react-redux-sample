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
                            <fieldset>
                                <legend>Food Menu</legend>
                                {/*Hardcoded mockups | Placeholders*/}
                                <Menu />
                            </fieldset>
                        </div> 
                        <div className="col-sm-6">
                            <legend>Tray</legend>
                            <Tray/>
                        </div>
                    </div>
                </div>
            </div>
        );        
    }
}


