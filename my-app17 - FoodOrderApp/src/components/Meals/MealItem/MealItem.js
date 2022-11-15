import React from 'react'

import styles from './MealItem.module.css'


const MealItem = (props) => {


    return(
        <div className={props.className}>
            <h5 className={styles.name}>{props.name}</h5>
            <p className={styles.description}>{props.description}</p>
            <h5 className={styles.price}>${props.price.toFixed(2)}</h5>
        </div>

    )
}

export default MealItem