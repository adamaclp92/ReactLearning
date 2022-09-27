import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
    const dataPoints = [
        {id:0, label: 'Jan', value: 0},
        {id:1, label: 'Feb', value: 0},
        {id:2, label: 'Már', value: 0},
        {id:3, label: 'Ápr', value: 0},
        {id:4, label: 'Máj', value: 0},
        {id:5, label: 'Jún', value: 0},
        {id:6, label: 'Júl', value: 0},
        {id:7, label: 'Aug', value: 0},
        {id:8, label: 'Szep', value: 0},
        {id:9, label: 'Okt', value: 0},
        {id:10, label: 'Nov', value: 0},
        {id:11, label: 'Dec', value: 0},
    ]


    for (let i = 0; i < props.filteredExpenses.length; i++){
        const expenseMonth = props.filteredExpenses[i].date.getMonth()
        dataPoints[expenseMonth].value += props.filteredExpenses[i].amount
    }

    return (
        <Chart dataPoints={dataPoints}
        />
    )
}

export default ExpensesChart