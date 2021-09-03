import React from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Cart from "../components/Cart";
import * as Message from '../constants/Message';
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import * as actions from '../actions/index';

function CartContainer (props) {
    let { cart, onDeleteProductInCart, onChangeMessage } = props;
    let showCartItem = (cart) => {
        let result = (<tr><td>{Message.MSG_CART_EMPTY}</td></tr>);
        if(cart.length > 0) {
            result = cart.map((item, index) => (
                <CartItem
                    key={index}
                    item={item}
                    index={index} 
                    onDeleteProductInCart={onDeleteProductInCart}
                    onChangeMessage={onChangeMessage}
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
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapActionsToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => dispatch(actions.accDeleteProductInCart(product)),
        onChangeMessage: (message) => dispatch(actions.accChangeMessage(message))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(CartContainer);

