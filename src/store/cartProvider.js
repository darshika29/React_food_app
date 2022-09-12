import { useReducer } from "react";
import { act } from "react-dom/test-utils";
import CartContext from "./cartContext";

//cartProvider is function that is used to update context
const defaultCartState = {
    items: [],
    totalAmount: 0,
    
};
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updateTotalAmount,
        }
    }
    return defaultCartState;
}
const CartProvider = (props) => {
   const [cartState,dispatchCartaction]= useReducer(cartReducer,defaultCartState)

    const addItemToCartHandler = (item) => {
        dispatchCartaction({type:"ADD",item:item});
        
    }
    const removeItemFromCartHandler = (id) => {
        dispatchCartaction({ type: "REMOVE", id: id });
        
    }


    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmounts,
        addItem: addItemToCartHandler,
        removeItem:removeItemFromCartHandler,
    }

    return <CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>
    
};

export default CartProvider;