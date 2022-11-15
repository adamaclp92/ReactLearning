import React from 'react'

import Card from '../../UI/Card/Card'
import style from './MealsSummary.module.css'

const MealsSummary = () => {

    return (
        <Card className={style.summary}>
                <h2 className={style.h2}>Delicius Food, Delivered To You</h2>
                <p>
                    Choose your favorite meal from our broad selection of available meals
                    and enjoy a delicious lunch or dinner at home.
                </p>
                <p>
                    All our meals are cooked with high-quality ingredients, just-in-time and
                    of course by experienced chefs!
                </p>
        </Card>
    )
}

export default MealsSummary