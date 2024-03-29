import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="page-footer center-on-small-only">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 ml-auto">
                        <h5 className="title social-section-title">
                            Social Media
                        </h5>
                        <div className="social-section text-md-left">
                            <ul className="text-center">
                                <li>
                                    <Link
                                        to="/"
                                        className="btn-floating  btn-fb waves-effect waves-light"
                                    >
                                        <i className="fa fa-facebook" />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="btn-floating  btn-ins waves-effect waves-light"
                                    >
                                        <i className="fa fa-instagram" />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="btn-floating  btn-tw waves-effect waves-light"
                                    >
                                        <i className="fa fa-twitter" />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="btn-floating  btn-yt waves-effect waves-light"
                                    >
                                        <i className="fa fa-youtube" />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="btn-floating  btn-li waves-effect waves-light"
                                    >
                                        <i className="fa fa-linkedin" />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="btn-floating  btn-dribbble waves-effect waves-light"
                                    >
                                        <i className="fa fa-dribbble left" />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="btn-floating  btn-pin waves-effect waves-light"
                                    >
                                        <i className="fa fa-pinterest" />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="btn-floating  btn-gplus waves-effect waves-light"
                                    >
                                        <i className="fa fa-google-plus" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <h5 className="title">Delivery</h5>
                        <ul>
                            <li>
                                <Link to="/">Store Delivery</Link>
                            </li>
                            <li>
                                <Link to="/">Online Delivery</Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Delivery Terms &amp; Conditions
                                </Link>
                            </li>
                            <li>
                                <Link to="/">Tracking</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h5 className="title">Need help?</h5>
                        <ul>
                            <li>
                                <Link to="/">FAQ</Link>
                            </li>
                            <li>
                                <Link to="/">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/">Return Policy</Link>
                            </li>
                            <li>
                                <Link to="/">Product Registration</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <h5 className="title">Instagram Photos</h5>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container-fluid">
                    © 2016 Copyright:
                    <Link to="http://www.MDBootstrap.com">
                        {" "}
                        MDBootstrap.com{" "}
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
