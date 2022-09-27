import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'WC papír',
      amount: 800,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'Új TV', amount: 125000, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Autó biztosítás',
      amount: 25000,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Új szekrény (fa)',
      amount: 40000,
      date: new Date(2021, 5, 12),
    },
  ]);

  const addExpenseHandler = (expense) => {
      //setExpenses([...expenses, expense])
      setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses]
      })

  }

  const DeleteItemById = (deletingItemId) => {
    const newExpensesArray = expenses.filter(item => item.id != deletingItemId.id)
    setExpenses(newExpensesArray)
}
  

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}
        onDeleteItemById={DeleteItemById} />
    </div>
  );
}

export default App;