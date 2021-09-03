import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./containers/Products";
import Message from "./components/Messagge";
import Cart from "./components/Cart";

function App() {
    return (
        <Router>
            <div className='App'>
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <Products />
                        <Message />
						<Cart />
					</div>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
