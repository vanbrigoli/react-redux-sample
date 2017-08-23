export function getLists() {
    return {
        type: 'GET_LIST'
    }
}

export function addItem(text) {
    return {
        type: 'ADD_ITEM',
        payload: text
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