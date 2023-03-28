import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import { useRef } from 'react'

const MealItemForm = (props) => {
    const amountInputRef = useRef()
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = Number(amountInputRef.current.value)
        props.onAddToCart(enteredAmount)
    }
    return <form className={classes.form} onSubmit = {submitHandler}>
       <Input input = {{
        id: props.item.id,
        type: 'number',
        defaultValue: 1,
        min: 1,
        max: 5
       }} label = "Amount"
       ref= {amountInputRef}
       />
        <button type = "submit">+ ADD</button>
    </form>
}

export default MealItemForm