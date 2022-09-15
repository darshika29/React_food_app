import Modal from "../UI/Modal";
import classes from "./cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/cartContext";
import CartItems from "./CartItems"



const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const removeItemHandler = (id) => {
        cartCtx.removeItem(id);
        
    };
    const addItemHandler = (item) => {
        cartCtx.addItem({...item,amount:1});
        
    };
    
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItem = cartCtx.items.length > 0;
    const CartItem = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (<CartItems key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={removeItemHandler.bind(null,item.id) } onAdd={addItemHandler.bind(null,item)}></CartItems>))}
        </ul>
    )

    return(
        <Modal onClose={props.onClose}>
            {CartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{ totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItem&&<button className={classes.button}>Order</button>}
            </div>
            </Modal>
    )

}
export default Cart