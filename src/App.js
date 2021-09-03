import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsContainer from "./containers/Products";
import Message from "./components/Messagge";
import CartContainer from './containers/Cart';

function App() {
    return (
        <Router>
            <div className='App'>
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <ProductsContainer />
                        <Message />
						<CartContainer />
					</div>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
