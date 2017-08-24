import { combineReducers } from 'redux';

import todos from './ListReducer';
import { orderList, activeOrder } from './OrderListReducer';
import currentOrderList from './CurrentOrderReducer';
import vendItemList from './VendItemListReducer';

const todoApp = combineReducers(
    {
        todos,
        orderList,
        currentOrderList,
        vendItemList,
        activeOrder,
    }
);

export default todoApp;