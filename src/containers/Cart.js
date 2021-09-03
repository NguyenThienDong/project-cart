import React from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Cart from "../components/Cart";
import * as Message from '../constants/Message';
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";

function CartContainer (props) {
    let { cart } = props;
    let showCartItem = (cart) => {
        let result = Message.MSG_CART_EMPTY;
        if(cart.length > 0) {
            result = cart.map((item, index) => (
                <CartItem
                    key={index}
                    item={item}
                    index={index} 
                />
                
            ))
        }
        return result;
    }
    return (
        <Cart>
            {showCartItem(cart)}
            <CartResult cart={cart}/>
        </Cart>
    )
}

CartContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(CartContainer);

