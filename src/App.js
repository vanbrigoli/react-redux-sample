import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class App extends Component {
    goToVendorPage(event) {
        event.preventDefault();
        browserHistory.push('/vendor');
    }

    goToBuyerPage(event) {
        event.preventDefault();
        browserHistory.push('/buyer');
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>Welcome to E-bili</h1>
                    <p>Try one now</p>
                </div>
                <div className="App-btn-center">
                    <button type="button" className="btn btn-primary btn-lg" onClick={this.goToVendorPage.bind(this)}>Vendor</button>
                    <button type="button" className="btn btn-success btn-lg" onClick={this.goToBuyerPage.bind(this)}>Buyer</button>
                </div>
            </div>
        )
    }
}

export default App;