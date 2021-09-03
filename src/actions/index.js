import * as types from '../constants/ActionTypes';

export const accAddToCart = (product, quantity) => ({
    type: types.ADD_TO_CART,
    product,
    quantity
})