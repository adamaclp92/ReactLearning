import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    // const [titleInput, setTitleInput] = useState()
    // const [amountInput, setAmountInput] = useState()
    // const [dateInput, setDateInput] = useState()

    const [inputField, setInputField] = useState({
        titleInput: "",
        amountInput: 0,
        dateInput: ""
    })

    const ChangeTitleListener = (event) => {
        // setTitleInput(event.target.value)
        // setInputField({
        //     ...inputField,
        //     titleInput: event.target.value
        // })
        setInputField((prevState) => ({
            ...prevState,
            titleInput: event.target.value
        }))

    }

    const ChangeAmountListener = (event) => {
        // setAmountInput(event.target.value)
        // setInputField({
        //     ...inputField,
        //     amountInput: event.target.value
        // })
        setInputField((prevState) => ({
            ...prevState,
            amountInput: event.target.value
        }))
    }

    const ChangeDateListener = (event) => {
        // setDateInput(event.target.value)
        // setInputField({
        //     ...inputField,
        //     dateInput: event.target.value
        // })
        setInputField((prevState) => ({
            ...prevState,
            dateInput: event.target.value
        }))
    }

    const SubmitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            title: inputField.titleInput,
            amount: parseInt(inputField.amountInput),
            date: new Date(inputField.dateInput)
        }


        props.onSaveExpenseData(expenseData)
        setInputField(() => ({
            titleInput: "",
            amountInput: 0,
            dateInput: ""
        }))
    }

    return(
        <div>
            <form onSubmit={SubmitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Termék</label>
                        <input type='text' 
                            onChange={ChangeTitleListener}
                            value={inputField.titleInput}
                        />
                    </div>
                    <div className='new-expense__control'>
                        <label>Összeg</label>
                        <input type='number' min='1' step='1' 
                            onChange={ChangeAmountListener}
                            value={inputField.amountInput}
                        />
                    </div>
                    <div className='new-expense__control'>
                        <label>Dátum</label>
                        <input type='date' min='2019-01-01' max='2022-12-31' 
                            onChange={ChangeDateListener}
                            value={inputField.dateInput}
                        />
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Költség hozzáadás</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm