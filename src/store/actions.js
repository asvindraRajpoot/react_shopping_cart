export function handleOrderBy(event) {
    console.log(event.target.value,'selectedOrder');
    return {
        type: 'handleOrderBy',
        payload:event.target.value
    }
}
// export function handleOrderProducts() {
//     return {
//         type: 'handleOrderProducts',
//     }
// }

export function toggle() {
    return {
        type: 'toggle',
    }
}







