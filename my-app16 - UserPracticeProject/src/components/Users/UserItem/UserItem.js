import React from 'react'
import styles from './UserItem.module.css'
import Card from '../../UI/Card'

const UserItem = (props) => {
    return(
        <Card className={`${styles['userItem--container']}`}>
            <p className={styles['userItem--par']}>{props.userName} ({props.userAge} years old)</p>
        </Card>
    )}

export default UserItem