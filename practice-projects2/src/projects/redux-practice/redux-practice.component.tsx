import React from 'react'
import { store } from './store'
import { Provider } from 'react-redux'

import Navbar from './components/Navbar/Navbar.component'

const ReduxPractice = () => {
  return (
      <Provider store={store}>
            <Navbar></Navbar>
      </Provider>

  )
}

export default ReduxPractice