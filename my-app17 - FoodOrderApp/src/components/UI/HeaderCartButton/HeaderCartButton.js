import { useContext, useEffect, useState } from 'react'
import CartIcon from '../CartIcon'
import CartContext from '../../../store/cart-context'

import style from './HeaderCartButton.module.css'


const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext)
    const [btnIsHighLigted, setBtnIsHighLighted] = useState(false)

    const { items } = cartCtx

    const numberOfCartItems= items.reduce(
        (curNumber, item) =>  {
            return curNumber + item.amount
        }, 0
    )

    const btnClasses = `${style.button} ${btnIsHighLigted ? style.bump : ''}`
 
    useEffect(() => {
        setBtnIsHighLighted(true)

        const timeout = setTimeout(() => {
            setBtnIsHighLighted(false)
        }, 300)

        return () => {
            clearTimeout(timeout)
        }

    }, [items])

    return (
            <button className={btnClasses} onClick={props.showCart}>
                <span className={style.icon}><CartIcon /></span>
                <span>Your Cart</span>
                <span className={style.cart}>{numberOfCartItems}</span>
            </button>
    )
}

export default HeaderCartButton