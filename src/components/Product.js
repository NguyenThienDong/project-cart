import React from "react";
import { Link } from "react-router-dom";
import * as Message from '../constants/Message';

function Product(props) {
    let {product} = props;
    let onAddToCart = (product) => {
        props.onAddToCart(product);
        props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
    }

    let showRating = (rating) => {
        let result = [];
        for(var i = 1; i <= rating; i++) {
            result.push( <i key={i} className="fa fa-star" />)
        }
        for(var j = 1; j <= (5 - rating); j++) {
            result.push(<i key={j + i} className="fa fa-star-o" />)
        }
        return result;
    }
    return (
        <div className="col-lg-4 col-md-6 mb-r">
            <div className="card text-center card-cascade narrower">
                <div className="view overlay hm-white-slight z-depth-1">
                    <img
                        src={product.image}
                        className="img-fluid"
                        alt="img"
                    />
                    <Link to="/">
                        <div className="mask waves-light waves-effect waves-light" />
                    </Link>
                </div>
                <div className="card-body">
                    <h4 className="card-title">
                        <strong>
                            <Link to="/">{product.name}</Link>
                        </strong>
                    </h4>
                    <ul className="rating">
                        <li>
                            {showRating(product.rating)}
                        </li>
                    </ul>
                    <p className="card-text">{product.description}</p>
                    <div className="card-footer">
                        <span className="left">{product.price}</span>
                        <span className="right">
                            <Link
                                to='/'
                                className="btn-floating blue-gradient"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="true"
                                data-original-title="Add to Cart"
                                onClick={() => onAddToCart(product)}
                            >
                                <i className="fa fa-shopping-cart"/>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
