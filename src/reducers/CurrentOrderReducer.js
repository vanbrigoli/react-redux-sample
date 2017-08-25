const currentOrderList = (state = [], action) => {
    switch(action.type){
        case 'ROLLBACK': {
            return [];
        }
        case 'ADD_ITEM': {
            const { itemName, price, id } = action;

            return state.find(orderItem => orderItem.id === id)
              ? state.map(orderItem => orderItem.id === id ? { ...orderItem, qty: ++orderItem.qty } : orderItem)
              : [ ...state, { itemName, price, id, qty: 1} ]
        }
        case 'REMOVE_ITEM': {
            return state.filter((item) => {
                return item.id !== action.id;
            });
        }
        default: return [...state]
    }
};

export default currentOrderList;
