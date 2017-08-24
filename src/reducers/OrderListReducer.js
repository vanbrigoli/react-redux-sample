let counter = 100;
const orderList = (state = [], action) => {
    switch(action.type){
        case 'SUBMIT_ORDER': {
            return [
                ...state,
                {
                    orderNumber: counter++,
                    orders: action.orders,
                    totalPrice: action.total
                }
            ];
        }
        default: return [...state]
    }
};

export default orderList;