import * as types from '../constants/ActionTypes';

var initialState = [
    {
        product: {
            id: 1,
            name: "Iphone 7 Plus",
            image: "https://images-na.ssl-images-amazon.com/images/I/51wcd%2Bz24TL._SX425_.jpg",
            description: "Sản phẩm do apple sản phẩm",
            price: 500,
            inventory: 10,
            rating: 4,
        },
        quantity: 5,
    },
    {
        product: {
            id: 2,
            name: "Samsung galaxy S7",
            image: "https://s7d2.scene7.com/is/image/SamsungUS/SMG930_gs7_102416?$product-details-jpg$",
            description: "Sản phẩm do samsung sản phẩm",
            price: 400,
            inventory: 15,
            rating: 3,
        },
        quantity: 3,
    },
];

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
            index = findIndex(state, action.product);
            if(index !== -1) {
                state[index].quantity += 1;
            }else {
                var cart = {
                    product,
                    quantity
                }
                state.push(cart);
            }
            return [...state];
        default:
            return [...state];
    }
};

export default cart;
