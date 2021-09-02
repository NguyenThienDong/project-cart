import React from 'react';
import { Link } from "react-router-dom";

function Main() {
    return (
        <main id="mainContainer">
            <div className="container">
                {/* Products */}
                <section className="section">
                    <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                    <div className="row">
                        {/* Product */}
                        <div className="col-lg-4 col-md-6 mb-r">
                            <div className="card text-center card-cascade narrower">
                                <div className="view overlay hm-white-slight z-depth-1">
                                    <img
                                        src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72"
                                        className="img-fluid"
                                        alt='img'
                                    />
                                    <Link to='/'>
                                        <div className="mask waves-light waves-effect waves-light" />
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <strong>
                                            <Link to='/'>Iphone 6 Plus</Link>
                                        </strong>
                                    </h4>
                                    <ul className="rating">
                                        <li>
                                            <i className="fa fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa fa-star" />
                                        </li>
                                    </ul>
                                    <p className="card-text">
                                        Sản phẩm do apply sản xuất
                                    </p>
                                    <div className="card-footer">
                                        <span className="left">15$</span>
                                        <span className="right">
                                            <Link
                                                to='/'
                                                className="btn-floating blue-gradient"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title='true'
                                                data-original-title="Add to Cart"
                                            >
                                                <i className="fa fa-shopping-cart" />
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Message */}
                <h3>
                    <span className="badge amber darken-2">
                        Mua Hàng Thành Công !
                    </span>
                </h3>
                {/* Cart */}
                <section className="section">
                    <div className="table-responsive">
                        <table className="table product-table">
                            <thead>
                                <tr>
                                    <th />
                                    <th>Sản Phẩm</th>
                                    <th>Giá</th>
                                    <th>Số Lượng</th>
                                    <th>Tổng Cộng</th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <img
                                            src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72"
                                            alt='img'
                                            className="img-fluid z-depth-0"
                                        />
                                    </th>
                                    <td>
                                        <h5>
                                            <strong>Iphone 6 Plus</strong>
                                        </h5>
                                    </td>
                                    <td>15$</td>
                                    <td className="center-on-small-only">
                                        <span className="qty">1 </span>
                                        <div
                                            className="btn-group radio-group"
                                            data-toggle="buttons"
                                        >
                                            <label
                                                className="btn btn-sm btn-primary
																	btn-rounded waves-effect waves-light"
                                            >
                                                <Link to='/'>—</Link>
                                            </label>
                                            <label
                                                className="btn btn-sm btn-primary
																	btn-rounded waves-effect waves-light"
                                            >
                                                <Link to='/'>+</Link>
                                            </label>
                                        </div>
                                    </td>
                                    <td>15$</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-primary waves-effect waves-light"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title='true'
                                            data-original-title="Remove item"
                                        >
                                            X
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={3} />
                                    <td>
                                        <h4>
                                            <strong>Tổng Tiền</strong>
                                        </h4>
                                    </td>
                                    <td>
                                        <h4>
                                            <strong>15$</strong>
                                        </h4>
                                    </td>
                                    <td colSpan={3}>
                                        <button
                                            type="button"
                                            className="btn btn-primary waves-effect waves-light"
                                        >
                                            Complete purchase
                                            <i className="fa fa-angle-right right" />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Main;