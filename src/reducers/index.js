import { combineReducers } from 'redux';

import todos from './ListReducer';
import orderList from './OrderListReducer';
import currentOrderList from './CurrentOrderReducer';
import VendItemList from './VendItemListReducer';

const todoApp = combineReducers(
    {
        todos,
        orderList,
        currentOrderList,
        vendItemList:VendItemList
    }
);

export default todoApp;