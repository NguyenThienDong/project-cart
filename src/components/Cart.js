import React from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import CartResult from "./CartResult";

function Cart(props) {

    return (
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
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartResult />
                    </tbody>
                </table>
            </div>
        </section>
    );
}

const mapStateToProps = state => {
    return {
        
    }
}

export default connect(mapStateToProps, null)(Cart);
