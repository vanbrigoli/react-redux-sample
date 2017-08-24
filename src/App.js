import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron App-center">
                  <div className="background"></div>
                  <h1>Welcome to E-bili</h1>
                  <p>Kain tayo ti!</p>
                  <div>
                    <Link to="/vendor" type="button" className="btn btn-lg">Vendor</Link>
                    <Link to="/buyer" type="button" style={{marginLeft: 10}} className="btn btn-lg">Buyer</Link>
                  </div>
                </div>
            </div>
        )
    }
}

export default App;