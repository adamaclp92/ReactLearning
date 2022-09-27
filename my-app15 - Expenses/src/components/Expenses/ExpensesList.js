import React from "react";
import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  
    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">Nincs megjeleníthető termék erre az évre.</h2>
    }


    const DeleteItemById = (deletingItemId) => {
        props.onDeleteItemById(deletingItemId)
    }

    return <ul className="expenses-list">
        {props.items.map((expenseItem) => (
        <ExpenseItem 
          key={expenseItem.id}
          id={expenseItem.id}
          title={expenseItem.title}
          amount={expenseItem.amount}
          date={expenseItem.date}
          onDeleteItemById={DeleteItemById}
        />
    ))}
    </ul>

}

export default ExpensesList