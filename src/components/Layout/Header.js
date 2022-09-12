import React,{Fragment} from "react"
import I1 from "../../assets/meals.jpg"
import classes from "./header.module.css"
import CartButton from "./CartButton"



const Header = (props) => { 
    
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>DarshikaMeals</h1>
                <span className={classes.cart}>
                    <CartButton onClick={ props.onClick} />
                </span>
            </header>
           
            <div className={classes['main-image']}>
                <img src={I1} alt="imageof meals"/>
            </div>
        </Fragment>
    )

}
export default Header