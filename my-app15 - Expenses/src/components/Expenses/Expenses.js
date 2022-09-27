import React, { useState } from 'react';

import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [dropdownYearValue, setDropdownYearValue] = useState('2020')

  const GetFilterYear = (selectedYear) => {
    setDropdownYearValue(selectedYear)
  }

  
  const DeleteItemById = (deletingItemId) => {
    props.onDeleteItemById(deletingItemId)
}

  const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === dropdownYearValue)

  return (
    <div>
      <Card className="expenses">
      <ExpensesChart filteredExpenses={filteredExpenses}/>
      <ExpenseFilter selected={dropdownYearValue} onGetFilterYear={GetFilterYear}/>
      <ExpensesList 
          items={filteredExpenses}
          onDeleteItemById={DeleteItemById}
          />
      </Card>
    </div>

  );
}

export default Expenses;