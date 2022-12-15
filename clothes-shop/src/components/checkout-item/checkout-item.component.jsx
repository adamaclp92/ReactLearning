import './checkout-item.style.scss'
import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react'

const CheckOutItem = ({cartItem}) => {
    
    const {name, imageUrl, price, quantity} = cartItem
    const {clearItemFromCart, addItemToCart,  deleteItemFromCart} = useContext(CartContext)

    const addAmountHandler = () => addItemToCart(cartItem)
    const deleteAmountHandler = () =>  deleteItemFromCart(cartItem)

    const clearCartItemHandler = () => clearItemFromCart(cartItem)

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={addAmountHandler}> 
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={deleteAmountHandler}>
                    &#10095;
                </div>
            </span>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={clearCartItemHandler}>&#10005;</div>
        </div>
    )
}

export default CheckOutItem