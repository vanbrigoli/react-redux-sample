export const ADD_ITEM = 'add_item';

export function getLists() {
    return {
        type: 'GET_LIST'
    }
}

export function addItem(item) {
    return {
        type: ADD_ITEM,
        payload: item
    }
}

export function deleteItem(id) {
    return {
        type: 'DELETE_ITEM',
        payload: id
    }
}

export function toggleId(id) {
    return {
        type: 'TOGGLE_ID',
        payload: id
    }
}