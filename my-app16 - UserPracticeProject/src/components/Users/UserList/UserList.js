import React from 'react'
import UserItem from '../UserItem/UserItem'
import styles from './UserList.module.css'


const UserList = (props) => {

    const userList = props.userList.map((user) => (
        <UserItem 
            key={Math.random().toString()}
            userName={user.userName}
            userAge={user.userAge}
            />
    ))

   
    return(
        <React.Fragment>
           {userList}
        </React.Fragment>
    )
}

export default UserList