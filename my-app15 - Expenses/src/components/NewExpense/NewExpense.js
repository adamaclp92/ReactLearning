import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    //Proppal lehet a parentből a child-ba juttatni adatot
    //Így meg a childból a parentbe
    //NEM LEHET KIHAGYNI KÖZTES KOMPONENST!
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense