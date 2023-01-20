import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () =>{},
    cartItems: [],
    addItemToCart: () => {},
    deleteItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartItemCount: 0,
    totalAmount: 0
})

export const CART_ACTION_TYPES = {
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_CART_ITEM_COUNT: 'SET_CART_ITEM_COUNT',
    SET_CART_TOTAL_AMOUNT: 'SET_CART_TOTAL_AMOUNT'
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartItemCount: 0,
    totalAmount: 0
}

const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {}
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {}
        case CART_ACTION_TYPES.SET_CART_ITEM_COUNT:
            return {}
        case CART_ACTION_TYPES.SET_CART_TOTAL_AMOUNT:
            return {}

        default: 
            throw new Error(`Unhandled type ${type} in cartReducer`)
    }
}

export const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    )

    if(existingCartItem){
        return(cartItems.map((cartItem) => 
        cartItem.id === productToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
        ))
    }

    return [...cartItems, {...productToAdd, quantity: 1}]
}

export const deleteCartItem = (cartItems, productToDelete) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToDelete.id
    )

    if(existingCartItem.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id)
    }

    return (cartItems.map((cartItem) => 
    cartItem.id === productToDelete.id
    ? {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem
    ))

}

export const clearCartItem = (cartItems, productToDelete) => 
    cartItems.filter((cartItem) => cartItem.id !== productToDelete.id)

export const CartProvider = ({children}) =>{
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartItemCount, setCartItemCount] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartItemCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const totalCartAmount = cartItems.reduce((totalAmount, cartItem) => totalAmount + cartItem.quantity * cartItem.price, 0)
        setTotalAmount(totalCartAmount)
    }, [cartItems])

    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product))
    } 

    const deleteItemFromCart = (product) => {
        setCartItems(deleteCartItem(cartItems, product))
    }

    const clearItemFromCart = (product) => {
        setCartItems(clearCartItem(cartItems, product))
    }


    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, deleteItemFromCart, clearItemFromCart, cartItemCount, totalAmount}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

