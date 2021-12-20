import { createStore } from 'redux';

let initialState = {
    cart: {
        isOpen: false,
    },
    products: {
        selectedOrder: "",

    }
}

function reducer(state = initialState, action) {
    console.log(state, 'state')
    console.log(action, 'action')
    switch (action.type) {
        case 'handleOrderBy':



            return { ...state, products: { ...state.products, selectedOrder: action.payload } }
        case 'toggle':
            return { ...state, cart: { ...state.cart, isOpen: !state.cart.isOpen } }

        default:
            return state;
    }


}

export default createStore(reducer);