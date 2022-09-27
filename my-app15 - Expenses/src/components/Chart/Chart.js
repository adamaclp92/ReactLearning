import React from 'react'

import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)

    let totalMaximum = 0
    for(let value of dataPointValues){
        totalMaximum += value
    } 


    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => 
                <ChartBar 
                    key={dataPoint.id}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label} />)}

        </div>
    )
}

export default Chart