import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from"./mealForm.module.css";



const MealForm = (props) => {
    const [itemStatus, setItemStatus] = useState(true);
    const itemAmount = useRef();

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = itemAmount.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setItemStatus(false)
            return;
        }
        props.onaddItem(enteredAmountNumber);

        
    }
    return(
        <form className={classes.form} onSubmit={formSubmitHandler}>
            <Input
                ref={itemAmount}
                label="Amount" input={{
                id:'amount'+ props.id,
                type:'number',
                min:'1',
                max:'3',
                step:'1',
                defaultValue:'1'
            }}/>
            <button>+ Add</button>
            {!itemStatus&&<p>Please enter valid input</p>}
        </form>
    )

};
export default MealForm;