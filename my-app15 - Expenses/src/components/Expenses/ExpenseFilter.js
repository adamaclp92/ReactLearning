import React, { useState } from "react";
import './ExpenseFilter.css'

const ExpenseFilter = (props) => {

    const HandleYearFilterChange = (event) => {
        props.onGetFilterYear(event.target.value)
    }

    return (
        <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label>Év szerinti szűrő</label>
          <select value={props.selected} onChange={HandleYearFilterChange} >
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
          </select>
        </div>
      </div>
    )
}

export default ExpenseFilter