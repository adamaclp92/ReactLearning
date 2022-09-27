import React from 'react'

export default function MainPage(props){
    return(
        <div className='container main-page-div'>
            <h2 className='main-title'>Quizzical</h2>
            <p className='main-description'>Some description if needed</p>
            <button 
                className='main-btn btn btn-primary main-page-btn'
                onClick={() => props.onClick()}
                >Start quiz
            </button>
        </div>
    )
}