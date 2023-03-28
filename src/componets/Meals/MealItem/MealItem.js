import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm";
import {useContext} from "react";
import CartContex from "../../../store/cart-contex";

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    const cartContex = useContext(CartContex)
    const addToCart = (amount) => {
        cartContex.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount
        })
    }
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm item = {props} onAddToCart = {addToCart}/>
            </div>
        </li>
    )
}

export default MealItem