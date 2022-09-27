import React from 'react';
import Globe from '../images/globe.png'

export default function Header(){
    return (
        <div className="header-div ">
            <div className='row header-divalt'>
                <img className='header-img' src={Globe}/>
                <p className='header-par'>my travel journal.</p>
            </div>
               
        </div>
    )

}