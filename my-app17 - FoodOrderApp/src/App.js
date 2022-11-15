import React, { useState } from 'react'
import Header from './components/UI/Header/Header'
import Cart from './components/Cart/Cart'
import MealsSummary from './components/Meals/MealsSummary/MealsSummary'
import AvailableMeals from './components/Meals/AvailableMeals/AvailableMeals'
import CartProvider from './store/CartProvider'

const App = () => {

    const [cartIsShown, setCartIsShown] = useState(false)

    const showCart = () => {
        setCartIsShown(true)
    }

    const hideCart = () => {
        setCartIsShown(false)
    }
    
    return(
        <CartProvider>
            {cartIsShown && <Cart hideCart={hideCart}/>}
            <Header showCart={showCart}
            />
            <MealsSummary />
            <AvailableMeals />
        </CartProvider>
    )

}

export default App




