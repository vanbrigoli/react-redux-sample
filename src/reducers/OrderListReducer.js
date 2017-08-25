import { SUBMIT_ORDER } from '../actions/TrayActions'
let counter = 100;
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
                    user:action.user
                }
            ];
        }
        default: return [...state]
    }
};

export const activeOrder = (state = 0, action) => {
    switch(action.type) {
        case SUBMIT_ORDER:
            return orderNumber;
        default: return state;
    }
};
