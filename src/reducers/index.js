import { combineReducers } from 'redux';

import todos from './ListReducer';
import { orderList, activeOrder } from './OrderListReducer';
import currentOrderList from './CurrentOrderReducer';
import vendItemList from './VendItemListReducer';
import { reducer as formReducer } from 'redux-form';

const todoApp = combineReducers(
    {
        todos,
        orderList,
        currentOrderList,
        vendItemList,
        activeOrder,
        form: formReducer
    }
);

export default todoApp;