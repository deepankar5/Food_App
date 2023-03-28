import classes from "./Cart.module.css";
import Modal from "./../UI/Modal";
import { useContext } from "react";
import CartContex from "../../store/cart-contex";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartContex = useContext(CartContex)
    const cartItem = cartContex.items
    const totalAmount = cartContex.totalAmount
    const formatedTotalAmount = `$${totalAmount.toFixed(2)}`

    const cartItemAddHandler = (item) => {
        const newItem = {...item, amount : 1}
        cartContex.addItem(newItem)
    }
    const cartItemRemoveHandler = (id) => {
        cartContex.removeItem(id)
    }
    return(<Modal>
        <ul className={classes['cart-items']}>
            {cartItem.map((item) =>
            <CartItem key = {item.id}
            name = {item.name}
            summary = {item.discription}
            price = {item.price}
            amount = {item.amount}
            onRemove = {cartItemRemoveHandler.bind(null, item.id)}
            onAdd = {cartItemAddHandler.bind(null, item)}
            />
            )}
        </ul>
        <div className={classes['total']}>
            <span>Total Amount</span>
            <span>{formatedTotalAmount}</span>
        </div>
        <div className={classes.actions}>
        <button className={classes['button--alt']} onClick = {props.onModalClose}>Close</button>
        <button className={classes.button} onClick = {props.onModalClose}>Order</button>
        </div>
    </Modal>    
)
}

export default Cart