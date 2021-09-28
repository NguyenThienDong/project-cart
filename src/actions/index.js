import * as types from '../constants/ActionTypes';

export const accAddToCart = (product, quantity) => ({
    type: types.ADD_TO_CART,
    product,
    quantity
})

export const accChangeMessage = (message) => ({
    type: types.CHANGE_MESSAGE,
    message
})

export const accDeleteProductInCart = (product) => ({
    type: types.DELETE_PRODUCT_IN_CART,
    product
})

export const accUpdateProductInCart = (product, quantity) => ({
    type: types.UPDATE_PRODUCT_IN_CART,
    product,
    quantity
})