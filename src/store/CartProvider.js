import CartContex from "./cart-contex"
import { useReducer } from "react"

const defaultCartState = {items: [], totalAmount: 0}

const cartReducer = (state, action) => {
    if(action.type === "ADD_ITEM"){
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id)
        const existingCartItem = state.items[existingCartItemIndex]
        let newItem = []
        if(existingCartItem){
            const updateItem = {...existingCartItem, amount: existingCartItem.amount + action.item.amount}
            newItem = [...state.items]
            newItem[existingCartItemIndex] = updateItem
        }else {newItem = state.items.concat(action.item)}
        const newTotalAmout = state.totalAmount + action.item.price * action.item.amount
        return {items: newItem, totalAmount: newTotalAmout}
    }
    if(action.type === "REMOVE_ITEM"){
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id)
        const existingCartItem = state.items[existingCartItemIndex]
        let newItem = []
        if(existingCartItem?.amount === 1){
            newItem = state.items.filter(item => item.id !== action.id)
        }else {
            const updateItem = {...existingCartItem, amount: existingCartItem.amount - 1}
            newItem = [...state.items]
            newItem[existingCartItemIndex] = updateItem
        }
        const newTotalAmout = state.totalAmount - existingCartItem.price 
        return {items: newItem, totalAmount: newTotalAmout}
    }   
    return defaultCartState
}

const CartProvider = (props) => {
    const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartState({type: 'ADD_ITEM', item: item})
    }
    const removeItemFromCartHandler = (id) => {
        dispatchCartState({type: 'REMOVE_ITEM', id: id})
    }

    const cartContex = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem : removeItemFromCartHandler
    }
    return<CartContex.Provider value = {cartContex}>
        {props.children}
    </CartContex.Provider>

}

export default CartProvider