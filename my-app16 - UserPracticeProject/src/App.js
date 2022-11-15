import React, {useState} from 'react'
import AddUser from './components/Users/AddUser/AddUser'
import UserList from './components/Users/UserList/UserList';


const App = () => {

  const [userList, setUserList] = useState([])

  const passUserList = (userName, userAge) => {

      setUserList((prevList) => {
          return [...prevList, {userName, userAge}]
      })

  }

  console.log(userList)

  return (
    <React.Fragment>
      <AddUser onPassUserList={passUserList}/>
      <UserList userList={userList}
        />
    </React.Fragment>

  )
}

export default App;