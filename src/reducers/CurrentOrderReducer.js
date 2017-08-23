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
    }
], action) => {
    switch(action.type){
        case 'ROLLBACK': {
            return [];
        }
        case 'REMOVE_ITEM': {
            let copy = [...state];
            let counter = 0;
            for(let item of copy){
                if(item.id === action.id){
                    copy.splice(counter, 1);
                }
                counter++;
            }
            return copy;
        }
        default: return [...state]
    }
};

export default currentOrderList;
