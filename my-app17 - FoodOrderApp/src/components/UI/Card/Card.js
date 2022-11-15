import React from 'react'

import style from './Card.module.css'

const Card = (props) => {

    return (
        <React.Fragment>
            <div className={`${props.className} ${style.card}`}>{props.children}</div>
        </React.Fragment>
    )

}

export default Card