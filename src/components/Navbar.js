import React from 'react';
import { Link } from 'react-router';

const App = () => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/lists">Lists</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default App;