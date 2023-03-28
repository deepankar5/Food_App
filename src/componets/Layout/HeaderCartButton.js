import { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "./../Cart/CartIcon";

import CartContex from "../../store/cart-contex";


const HeaderCartButton = (props) => {
    const cartContex = useContext(CartContex)
    const [buttonIsHighlighted, setButtonIsHiglighted] = useState(false)
    const {items} = cartContex
    const numberOfItem = items.reduce((curNum, item) => {
        return curNum + item.amount
    }, 0)
    useEffect(()=> {
        if(items.length === 0) return
        setButtonIsHiglighted(true)
       const interval =  setTimeout(()=> {setButtonIsHiglighted(false)}, 300)
        return () => {
            clearTimeout(interval)
        }
    }, [items])
    const btnClass = `${classes.button} ${buttonIsHighlighted && classes.bump}`
    return <button className={btnClass} onClick = {props.onModalOpener}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfItem}
        </span>
    </button>
}

export default HeaderCartButton