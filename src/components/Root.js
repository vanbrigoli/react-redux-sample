import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './../App'
import Buyer from './Buyer';
import Checkout from './Checkout';
import VendorView from './VendorView';
import VendorWindow from './VendorWindow';
import VendorOrderListView from './VendorOrderListView';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}/>
            <Route path={"/buyer"} component={Buyer}/>
            <Route path={"/checkout"} component={Checkout}/>
            <Route path={"/vendor"} component={VendorView}>
                <IndexRoute component={VendorWindow}/>
                <Route path={"/order-list"} component={VendorOrderListView}/>
            </Route>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root