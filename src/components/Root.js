import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import App from './../App'
import Buyer from './Buyer';
import Checkout from './Checkout';
import Home from './Home';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}/>
            <Route path={"/vendor"} component={Home}/>
            <Route path={"/buyer"} component={Buyer}/>
            <Route path={"/checkout"} component={Checkout}/>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root