import React from "react"
import {Link, Outlet} from 'react-router-dom'
import circleimage from '../../assets/circle-drawer.png'

import './navigation.style.scss'

const Navigation = () => {

    return (
    <React.Fragment>
        <div className="navigation-container">
            <Link className="nav-link" to="circledrawer"><img src={circleimage}/>
                </Link>
            <Link className="nav-link" to="synonymapi">Synonym API
                </Link>
            <Link className="nav-link" to="colorchooser">Color chooser
                </Link>
            <Link className="nav-link" to="usereducerpractice">UseReducer Practice</Link>
            <Link className="nav-link" to="reduxpractice">Redux Practice</Link>
        </div>
    </React.Fragment>)
}

export default Navigation