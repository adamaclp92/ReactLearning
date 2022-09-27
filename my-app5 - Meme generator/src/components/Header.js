import React from 'react';
import App from '../App';
import Meme from '../images/meme.png'

export default function Header(props){
    return (
        <nav className="navbar">
            <p>Current user: {props.user}</p>
            <img className='header-meme-icon' src={Meme} alt="meme-icon"/>
            <h2 className="navbar-brand">Meme Generator</h2>
            <p className="header-par my-2 my-sm-0" type="submit">React Course Project</p>
        </nav>
    )

}