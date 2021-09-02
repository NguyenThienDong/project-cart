import React from "react";
import Product from "./Product";
import {connect} from 'react-redux';

function Products(props) {
    let {products} = props;
    let elmProducts = products.map(product => <Product key={product.id} product={product} />)
    return (
        <section className="section">
            <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
            <div className="row">
                {/* Product */}
                {elmProducts}
            </div>
        </section>
    );
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(Products);

