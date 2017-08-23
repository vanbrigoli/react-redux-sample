const todos = (state = [
    {
        title: 'Test 1',
        id: generateId(),
        completed: false
    },
    {
        title: 'Test 2',
        id: generateId(),
        completed: false
    }
], action) => {
    switch (action.type) {
        case 'GET_LIST': {
            return [...state];
        }
        case 'ADD_ITEM': {
            let copy = [...state];
            copy.push({
                title: action.payload,
                id: generateId(),
                completed: false
            });
            return copy;
        }
        case 'DELETE_ITEM': {
            let copy = [...state];
            let count = 0;
            for(let item of copy){
                if(item.id === action.payload){
                    copy.splice(count, 1);
                    return copy;
                }
                count++;
            }
            return copy;
        }
        case 'TOGGLE_ID': {
            let copy = [...state];
            return copy.map(todo => (todo.id === action.payload) ? {...todo, completed: !todo.completed}: todo);
        }
        default: return state;
    }
};

function generateId() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 32; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

export default todos;