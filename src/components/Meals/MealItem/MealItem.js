import React, { Fragment } from "react";
import MealForm from "./MealForm";
import classes from "./mealItem.module.css";


const MealItem=(props)=>{
    const price= `$ ${props.price.toFixed(2)}`;
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
                    <MealForm/>


                </div>
            </li>

        </Fragment>
     )


};
export default MealItem;


