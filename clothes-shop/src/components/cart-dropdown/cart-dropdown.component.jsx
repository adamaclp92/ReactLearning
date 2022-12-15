import { useContext } from 'react'
import './cart-dropdown.style.scss'
import Button from '../UI/button/button'
import CartItem from '../cart-item/cart-item.component'

import { CartContext } from '../../contexts/cart.context'
import { useNavigate } from 'react-router-dom'


const CartDropDown = () => {

    const {cartItems, setIsCartOpen} = useContext(CartContext)

    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate('/checkout')
        setIsCartOpen(false)
    }

    return (
        <div className='cart-dropdown-container'>
        {cartItems.length > 0 ? (
            <div>
            <div className='cart-items'>
                <img />
                {cartItems.map((item) => 
                    <CartItem key={item.id} cartItem={item}/>)}
            </div> 
            <Button onClick={goToCheckoutHandler}>Go to CHECKOUT</Button>
        </div>
        ) : <span>No items in the cart.</span>}
        </div>

        
    )
}

export default CartDropDown