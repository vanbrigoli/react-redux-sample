import { SUBMIT_ORDER, CLAIM_ORDER } from '../actions/TrayActions'
let counter = 1;
let orderNumber;

export const orderList = (state = [], action) => {
    switch(action.type){
        case SUBMIT_ORDER: {
            orderNumber = counter++;
            return [
                ...state,
                {
                    orderNumber,
                    orders: action.orders,
                    totalPrice: action.total,
                    user:action.user,
                    isClaimed: false,
                }
            ];
        }
        case CLAIM_ORDER: {
            return state.map(function(orderItem) {
                return orderItem.orderNumber === action.orderNumber
                ? {...orderItem, isClaimed: true}
                : orderItem
            })
        }
        default: return state
    }
};

export const activeOrder = (state = 0, action) => {
    switch(action.type) {
        case SUBMIT_ORDER:
            return orderNumber;
        default: return state;
    }
};
