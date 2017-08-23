let counter = 100;
const orderList = (state = [], action) => {
    switch(action.type){
        case 'SUBMIT_ORDER': {
            let copy = [...state];
            let order = {
              orderNumber: counter++,
              orders: action.orders,
              totalPrice: action.total
            };
            copy.push(order);
            return copy;
        }
        default: return [...state]
    }
};

export default orderList;