import React from 'react'
import Filled from '../images/star.png'
import UnFilled from '../images/empty-star.jpg'


export default function Star(props){
    let starIcon = props.isFilled ? Filled : UnFilled
    return(
        <div>
            <img 
            src={starIcon}
            width="20px"
            onClick={props.onClick}
            />
        </div>

    )
}
