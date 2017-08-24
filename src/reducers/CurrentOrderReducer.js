const currentOrderList = (state = [
    {
        itemName: 'TEST 1',
        price: 500,
        id: 1
    },
    {
        itemName: 'TEST 2',
        price: 500,
        id: 2
    },
    {
        itemName: 'TEST 3',
        price: 500,
        id: 3
    },
    {
        itemName: 'TEST 1',
        price: 500,
        id: 4
    },
    {
        itemName: 'TEST 2',
        price: 500,
        id: 5
    },
    {
        itemName: 'TEST 3',
        price: 500,
        id: 6
    }
], action) => {
    switch(action.type){
        case 'ROLLBACK': {
            return [];
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
