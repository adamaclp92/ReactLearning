import { useContext } from "react"
import CheckOutItem from "../../components/checkout-item/checkout-item.component"
import { CartContext } from "../../contexts/cart.context"

import "./checkout.style.scss"

const Checkout = () => {

    const { cartItems, totalAmount } = useContext(CartContext)

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <span className="header-block">Product</span>
                <span className="header-block">Description</span>
                <span className="header-block">Quantity</span>
                <span className="header-block">Price</span>
                <span className="header-block">Remove</span>
            </div>
            <div>
                {cartItems.map((item) => (
                    <CheckOutItem key={item.id} cartItem={item}/>))}
            </div>
            <div className="total">Total: ${totalAmount}</div>
        </div>
    )

}

export default Checkout