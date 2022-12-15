import { useContext, useEffect, useState } from 'react'
import Button from '../UI/button/button'
import './product.card.style.scss'

import { CartContext } from '../../contexts/cart.context'

const ProductCard = ({product}) => {

    const {name, price, imageUrl} = product

    const {addItemToCart} = useContext(CartContext)

    const toggleAddCartButton = () => {
        addItemToCart(product)
    }

    return(
        <div className="product-card-container">
             <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className="name">{name}</span>
                <span className="price">{price} $</span>
            </div>
            <Button buttonType='inverted'onClick={toggleAddCartButton}>Add to Cart</Button>
        </div>
    )
}

export default ProductCard