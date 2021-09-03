import React from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Products from "../components/Products";
import Product from "../components/Product";
import * as actions from '../actions/index';

function ProductsContainer (props) {
    let {products, onAddToCart} = props;
    let showProducts = products.map(product => <Product 
                                                    key={product.id} 
                                                    product={product} 
                                                    onAddToCart={onAddToCart}
                                                    />)
    return (
        <Products>
            {showProducts}
        </Products>
    );
}

ProductsContainer.propTypes = {
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
        products: state.products
    }
}

const mapActionsToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => dispatch(actions.accAddToCart(product, 1)) 
    }
}

export default connect(mapStateToProps, mapActionsToProps)(ProductsContainer);

