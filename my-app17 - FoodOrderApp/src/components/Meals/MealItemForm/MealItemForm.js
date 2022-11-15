import React, { useRef, useState, useContext } from 'react'
import Input from '../../UI/Input/Input'
import CartContext from '../../../store/cart-context'

import styles from './MealItemForm.module.css'

const MealItemForm = (props) => {
  
    const [inputIsValid, setInputIsValid] = useState(true)
    const cartCtx = useContext(CartContext)
    const amountRef = useRef()
    
    const submitHandler = (event) => {
        event.preventDefault()

        const amount = amountRef.current.value
    
        
        if(amount.trim().length === 0){
            setInputIsValid(false)
            return
        }else{
            setInputIsValid(true)
          
        }

        const numberAmount = +amount

        const item = {
            id:props.id,
            name: props.name,
            price:props.price,
            amount: numberAmount
        }

        cartCtx.addItem(item)

    }

    return (
        <form className={`${styles.form} ${props.className}`} onSubmit={submitHandler}>
            <Input 
                ref={amountRef}
                label="Amount"
                input={{
                    id: 'amount' + props.id,
                    type: 'number',
                    min: 1,
                    max: 5,
                    step: 1,
                    defaultValue: '1'
            }}/>
            <button className={`${styles.submitButton} btn`} type='submit'>+ Add </button>
            {!inputIsValid && <p>Please fill the input field.</p>}
        </form>
    )
}

export default MealItemForm