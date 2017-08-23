import { combineReducers } from 'redux';

import todos from './ListReducer';
import orderList from './OrderListReducer';
import currentOrderList from './CurrentOrderReducer';

const todoApp = combineReducers(
    {
        todos,
        orderList,
        currentOrderList
    }
);

export default todoApp;