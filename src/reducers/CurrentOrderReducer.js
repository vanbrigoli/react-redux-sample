import { INCREASE_QTY, DECREASE_QTY } from '../actions/TrayActions';

const currentOrderList = (state = [], action) => {
    switch(action.type){
        case 'ROLLBACK': {
            return [];
        }
        case 'ADD_ITEM': {
            const { itemName, price, id } = action;

            return state.find(orderItem => orderItem.id === id)
              ? increaseMenuItemQty(state, id)
              : [ ...state, { itemName, price, id, qty: 1} ]
        }
        case INCREASE_QTY: {
            return increaseMenuItemQty(state, action.id)
        }
        case 'REMOVE_ITEM': {
            return state.filter((item) => {
                return item.id !== action.id;
            });
        }
        case DECREASE_QTY: {
          return decreaseMenuItemQty(state, action.id)
        }
        default: return [...state]
    }
};

function increaseMenuItemQty (orders, id) {
    return orders.map(orderItem => {
        const updatedMenuItemQty = ++orderItem.qty;
        return orderItem.id === id
            ? { ...orderItem, qty: updatedMenuItemQty }
            : orderItem
    })
}

function decreaseMenuItemQty (orders, id) {
    return orders.map(orderItem => {
        const updatedMenuItemQty = orderItem.qty - 1 || orderItem.qty;
        return orderItem.id === id
            ? { ...orderItem, qty: updatedMenuItemQty }
            : orderItem
    })
}

export default currentOrderList;
