import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <ul
                id="slide-out"
                className="side-nav hidden custom-scrollbar sn-bg-2 ps ps--theme_default"
                data-ps-id="c27390a3-9efc-e0d8-197a-ab96d73a156a"
            >
                <li>
                    <div className="logo-wrapper waves-light waves-effect waves-light">
                          <Link to='/'>
                            <img
                                src="http://mdbootstrap.com/img/logo/mdb-transparent.png"
                                alt="img"
                                className="img-fluid flex-center"
                            />
                        </Link>
                    </div>
                </li>
                <li>
                    <ul className="social">
                        <li>
                             <Link to='/'  className="icons-sm fb-ic">
                                <i className="fa fa-facebook"> </i>
                            </Link>
                        </li>
                        <li>
                             <Link  to='/' className="icons-sm pin-ic">
                                <i className="fa fa-pinterest"> </i>
                            </Link>
                        </li>
                        <li>
                             <Link to='/' className="icons-sm gplus-ic">
                                <i className="fa fa-google-plus"> </i>
                            </Link>
                        </li>
                        <li>
                             <Link to='/' className="icons-sm tw-ic">
                                <i className="fa fa-twitter"> </i>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <form className="search-form" role="search">
                        <div className="form-group waves-light waves-effect waves-light">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                            />
                        </div>
                    </form>
                </li>
                <li>
                    <ul className="collapsible collapsible-accordion">
                        <li>
                             <Link to='/' className="collapsible-header waves-effect arrow-r">
                                <i className="fa fa-shopping-bag" /> Product
                                Page
                                <i className="fa fa-angle-down rotate-icon" />
                            </Link>
                            <div className="collapsible-body">
                                <ul>
                                    <li>
                                         <Link
                                            to="product.html"
                                            className="waves-effect"
                                        >
                                            Product Page V.1
                                        </Link>
                                    </li>
                                    <li>
                                         <Link
                                            to="product-page.html"
                                            className="waves-effect"
                                        >
                                            Product Page V.2
                                        </Link>
                                    </li>
                                    <li>
                                         <Link
                                            to="product-page-4.html"
                                            className="waves-effect"
                                        >
                                            Product Page V.3
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="active">
                             <Link to='/' className="collapsible-header waves-effect arrow-r active">
                                <i className="fa fa-shopping-cart" /> Cart Pages
                                <i className="fa fa-angle-down rotate-icon" />
                            </Link>
                            <div className="collapsible-body">
                                <ul>
                                    <li>
                                         <Link 
                                            to="cart.html"
                                            className="waves-effect"
                                        >
                                            Page with shopping cart
                                        </Link>
                                    </li>
                                    <li>
                                         <Link 
                                            to="contact.html"
                                            className="waves-effect"
                                        >
                                            Page with contact form
                                        </Link>
                                    </li>
                                    <li>
                                         <Link 
                                            to="contact-2.html"
                                            className="waves-effect"
                                        >
                                            Page with contact form V.2
                                        </Link>
                                    </li>
                                    <li>
                                         <Link 
                                            to="login.html"
                                            className="waves-effect"
                                        >
                                            Page with sign in form
                                        </Link>
                                    </li>
                                    <li>
                                         <Link
                                            to="terms.html"
                                            className="waves-effect"
                                        >
                                            Page with 'terms of use'
                                        </Link>
                                    </li>
                                    <li>
                                         <Link
                                            to="faq.html"
                                            className="waves-effect"
                                        >
                                            Page with 'FAQ'
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                             <Link to='/' className="collapsible-header waves-effect arrow-r">
                                <i className="fa fa-dashboard" /> Homepages
                                <i className="fa fa-angle-down rotate-icon" />
                            </Link>
                            <div className="collapsible-body">
                                <ul>
                                    <li>
                                         <Link
                                            to="home-page.html"
                                            className="waves-effect"
                                        >
                                            Ecommerce homepage default
                                        </Link>
                                    </li>
                                    <li>
                                         <Link
                                            to="home-page-2.html"
                                            className="waves-effect"
                                        >
                                            Ecommerce homepage full width
                                        </Link>
                                    </li>
                                    <li>
                                         <Link
                                            to="home-page-3-carousel.html"
                                            className="waves-effect"
                                        >
                                            Ecommerce homepage V.3 Carousel
                                        </Link>
                                    </li>
                                    <li>
                                         <Link
                                            to="home-page-3-full-page-carousel.html"
                                            className="waves-effect"
                                        >
                                            Ecommerce homepage V.3 Full Page
                                            Carousel
                                        </Link>
                                    </li>
                                    <li>
                                         <Link 
                                            to="home-page-3-half-page-carousel.html"
                                            className="waves-effect"
                                        >
                                            Ecommerce homepage V.3 Half Page
                                            Carousel
                                        </Link>
                                    </li>
                                    <li>
                                         <Link 
                                            to="home-page-4.html"
                                            className="waves-effect"
                                        >
                                            Ecommerce homepage V.4
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                             <Link to='/' className="collapsible-header waves-effect arrow-r">
                                <i className="fa fa-desktop" /> Post Pages
                                <i className="fa fa-angle-down rotate-icon" />
                            </Link>
                            <div className="collapsible-body">
                                <ul>
                                    <li>
                                         <Link
                                            to="post.html"
                                            className="waves-effect"
                                        >
                                            Page with column on the right
                                        </Link>
                                    </li>
                                    <li>
                                         <Link
                                            to="blog-post-left-column.html"
                                            className="waves-effect"
                                        >
                                            Page with newsletter on the left
                                        </Link>
                                    </li>
                                    <li>
                                         <Link
                                            to="blog-post.html"
                                            className="waves-effect"
                                        >
                                            Page with newsletter on the right
                                        </Link>
                                    </li>
                                    <li>
                                         <Link
                                            to="blog-post-full-width.html"
                                            className="waves-effect"
                                        >
                                            Full width page with logged user
                                        </Link>
                                    </li>
                                    <li>
                                         <Link
                                            to="blog-post-full-width%20not%20logged%20in%20user.html"
                                            className="waves-effect"
                                        >
                                            Full width page with not logged user
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                             <Link to='/' className="collapsible-header waves-effect arrow-r">
                                <i className="fa fa-diamond" /> Category Pages
                                <i className="fa fa-angle-down rotate-icon" />
                            </Link>
                            <div className="collapsible-body">
                                <ul>
                                    <li>
                                         <Link 
                                            to="category-list-left-column.html"
                                            className="waves-effect"
                                        >
                                            Category list with left column
                                        </Link>
                                    </li>
                                    <li>
                                         <Link 
                                            to="category-list-right-column.html"
                                            className="waves-effect"
                                        >
                                            Category list with right column
                                        </Link>
                                    </li>
                                    <li>
                                         <Link
                                            to="category-grid-left-column.html"
                                            className="waves-effect"
                                        >
                                            Category grid with left column
                                        </Link>
                                    </li>
                                    <li>
                                         <Link
                                            to="category-right-column.html"
                                            className="waves-effect"
                                        >
                                            Category grid with right column
                                        </Link>
                                    </li>
                                    <li>
                                         <Link
                                            to="category-grid-left-column-carousel.html"
                                            className="waves-effect"
                                        >
                                            Category grid with left column
                                            carousel
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
                <div className="sidenav-bg mask-strong" />
                <div className="ps__scrollbar-x-rail">
                    <div className="ps__scrollbar-x" tabIndex={0} />
                </div>
                <div className="ps__scrollbar-y-rail">
                    <div className="ps__scrollbar-y" tabIndex={0} />
                </div>
            </ul>
            <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg navbar-dark scrolling-navbar double-nav">
                <div className="float-left">
                     <Link to='/'
                        data-activates="slide-out"
                        className="button-collapse"
                    >
                        <i className="fa fa-bars" />
                    </Link>
                </div>
                <div className="breadcrumb-dn mr-auto">
                    <ol className="breadcrumb header-breadcrumb">
                        <li className="breadcrumb-item">
                              <Link to='/'>Trang Chủ</Link>
                        </li>
                    </ol>
                </div>
                <ul className="nav navbar-nav nav-flex-icons ml-auto">
                    <li className="nav-item dropdown">
                         <Link to='/'
                            className="nav-link dropdown-toggle waves-effect waves-light"
                            id="dropdownMenu1"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <i className="fa fa-user" /> Tài Khoản
                        </Link>
                        <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="dropdownMenu1"
                        >
                             <Link to='/' className="dropdown-item waves-effect waves-light">
                                Đăng Ký
                            </Link>
                             <Link to='/' className="dropdown-item waves-effect waves-light">
                                Đăng Nhập
                            </Link>
                             <Link to='/' className="dropdown-item waves-effect waves-light">
                                Đăng Xuất
                            </Link>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
