import React from 'react'
import { useSelector } from 'react-redux'

import  { ReactComponent as ShopBag } from '../../assets/shopping-bag.svg'

import './Navbar.style.scss'

const Navbar = () => {
  return (
    <nav>
        <div className='nav-center'>
            <h3>Redux Toolkit</h3>
            <div className="nav-container">
              <ShopBag className='shopping-icon'/>
              <div className='amount-container'>
                <p className='total-amount'>0</p>
              </div>
            </div>
          
        </div>
    </nav>
  )
}

export default Navbar