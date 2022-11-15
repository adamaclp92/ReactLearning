import React from 'react'

import styles from './Input.module.css'


const Input = React.forwardRef((props, ref) => {

    return (
        <React.Fragment>
            <label className={styles.title}>{props.label}</label>
            <input ref={ref} className={styles.input} {...props.input} />
        </React.Fragment>

    )
})

export default Input