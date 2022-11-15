import React from 'react'

import HeaderCartButton from '../HeaderCartButton/HeaderCartButton'
import style from './Header.module.css'
import MealsImage from '../../../images/meals.jpg'

const Header = (props) => {

    return(
        <React.Fragment>
            <header className={style.header}>
                <h2>ReactMeals</h2>
                <HeaderCartButton showCart={props.showCart}
                                  hideCart={props.hideCart}
                />
            </header>
            <div className={style.mealsImage}>
                <img src={MealsImage} alt='mealsImage'/>
            </div>
        </React.Fragment>
    )
} 

export default Header