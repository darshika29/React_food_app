import React from "react";
import Input from "../../UI/Input";
import classes from"./mealForm.module.css";



const MealForm=(props)=>{
    return(
        <form className={classes.form}>
            <Input label="Amount" input={{
                id:'amount'+ props.id,
                type:'number',
                min:'1',
                max:'3',
                step:'1',
                defaultValue:'1'
            }}/>
            <button>+ Add</button>
        </form>
    )

};
export default MealForm;