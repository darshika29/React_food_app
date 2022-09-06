import Modal from "../UI/Modal";
import classes from "./cart.module.css";


const Cart=()=>{
    const CartItem=(<ul className={classes['cart-items']}>{[{id:'x1', name:'food1', amount:'1', price:'80'}].map((item)=>(<li>{item.name}</li>))}</ul>)
    return(
        <Modal>
            {CartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.00</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
            </Modal>
    )

}
export default Cart