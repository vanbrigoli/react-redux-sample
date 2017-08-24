export function submitOrder(orderList, total) {
    return {
        type: 'SUBMIT_ORDER',
        orders: orderList,
        total: total
    }
}

export function removeItem(id) {
    return {
        type: 'REMOVE_ITEM',
        id: id
    }
}

export function rollbackOrder() {
    return {
        type: 'ROLLBACK'
    }
}

export function addItem(menuItem) {
    return {
        type: 'ADD_ITEM',
        ...menuItem
    }
}

export function sortMenuItems(sortType) {
    return {
        type: 'SORT_MENU',
        sortType: sortType
    }
}
