import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron App-center">
                    <h1>Welcome to E-bili</h1>
                    <p>Kain tayo ti!</p>
                </div>
                <div className="App-center">
                    <Link to="/vendor" type="button" className="btn btn-primary btn-lg">Vendor</Link>
                    <Link to="/buyer" type="button" style={{marginLeft: 10}} className="btn btn-success btn-lg">Buyer</Link>
                </div>
            </div>
        )
    }
}

export default App;