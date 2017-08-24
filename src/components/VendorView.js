import React, { Component } from 'react';
import './VendorView.css';
import Navbar from './Navbar';

class VendorView extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                { this.props.children }
            </div>
        );
    }
}

export default VendorView;