import React from 'react'

export default function Die(props){
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#34c3eb"
    }
  
    return(
        <div className='col'>
            <button 
                className='btn btn-lg buttons'
                style={styles}
                onClick={props.onClick}>
                {props.value}
            </button>
        </div>
    )
}