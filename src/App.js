import React, { useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/cartProvider.js";


const App = () => {
    const [cartStatus, setCartStatus] = useState(false)
    const showCartHandler = () => {
        setCartStatus(true);
        
    }
    const hideCartHandler = () => {
        setCartStatus(false)
    }
    return (
        <CartProvider>
              {
            cartStatus && <Cart onClose={ hideCartHandler} />
              } 
      
            <Header onClick={showCartHandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>

    )
    

};
export default App
