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

export const DECREASE_QTY = 'DECREASE_QTY';
export function decreaseQty(id) {
    return {
        type: DECREASE_QTY,
        id
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

export const INCREASE_QTY = 'INCREASE_QTY';
export function increaseQty(id) {
    return {
        type: INCREASE_QTY,
        id
    }
}

export function sortMenuItems(sortType) {
    return {
        type: 'SORT_MENU',
        sortType: sortType
    }
}
