import './cart-icon.style.scss'
import { ReactComponent as ShopBag } from "../../assets/shopping-bag.svg";
import {CartContext} from '../../contexts/cart.context'
import { useContext, useState, useEffect } from 'react';

const CartIcon = () => {
    const [btnBump, setBtnBump] = useState(false)

    const {isCartOpen, setIsCartOpen, cartItems, cartItemCount} = useContext(CartContext)

    const btnClass = `cart-icon-container ${btnBump ? 'bump' : ''}`

    useEffect(() => {
        setBtnBump(true)
        const timeout = setTimeout(() => {
            setBtnBump(false)
        }, 300)

        return () =>{
            clearTimeout(timeout)
        }
    }, [cartItems])

    const toggleIsCartOpen = () =>setIsCartOpen(!isCartOpen)

    return (
       <div onClick={toggleIsCartOpen} className={btnClass}>
           <ShopBag className='shopping-icon' />
           <span className='item-count'>{cartItemCount}</span>
       </div> 
    )
}

export default CartIcon