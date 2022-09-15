import React, { Fragment } from "react";
import MealForm from "./MealForm";
import classes from "./mealItem.module.css";
import { useContext } from "react";
import CartContext from "../../../store/cartContext";

const MealItem = (props) => {
    const CartCtx=useContext(CartContext);
    
    const price = `$ ${props.price.toFixed(2)}`;
    
    const AddItemHandler = (amount) => {
        CartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price:props.price
            
        })

        
    }
     return(
        <Fragment>
            <li className={classes.meal}>
                <div>
                    <h3>{props.name}</h3>
                </div>
                <div className={classes.description}>
                    {props.description}
                </div>
                <div className={classes.price}>
                    {price}
                </div>
                <div>
                     <MealForm onaddItem={ AddItemHandler} />


                </div>
            </li>

        </Fragment>
     )


};
export default MealItem;


