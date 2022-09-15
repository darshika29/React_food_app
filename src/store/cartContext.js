//created context for order 
//here CartContext is constant not function
import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0.00,
    addItem: (item) => { },
    removeItem: (id)=>{},
});
export default CartContext;