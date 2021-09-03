import React from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Products from "../components/Products";
import Product from "../components/Product";

function ProductsContainer (props) {
    let {products} = props;
    let showProducts = products.map(product => <Product key={product.id} product={product} />)
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

export default connect(mapStateToProps, null)(ProductsContainer);

