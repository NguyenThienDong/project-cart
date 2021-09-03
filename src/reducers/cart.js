import * as types from '../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : []

var findIndex = (cart, product) => {
    var index = -1;
    if(cart.length > 0) {
        for(var i = 0; i < cart.length; i++) {
            if(cart[i].product.id === product.id) {
                index = i
            }
        }
    }
    return index;
}

const cart = (state = initialState, action) => {
    var index = -1;
    var { product, quantity} = action;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findIndex(state, product);
            if(index !== -1) {
                state[index].quantity += 1;
            }else {
                var cart = {
                    product,
                    quantity
                }
                state.push(cart);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        case types.DELETE_PRODUCT_IN_CART:
            index = findIndex(state, product);
            if(index !== -1) {
                state.splice(index, 1);
            }

            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        default:
            return [...state];
    }
};

export default cart;
