import React from 'react'

export default function Box(props){

    const styles = {backgroundColor: props.on ? "black" : "white"}

   /* function toggle(){
        setOn(prevState => !prevState)
    }*/

    return (
        <div 
            className='box' 
            style={styles} 
            onClick={() => props.onClick(props.id)}>
                {props.id}
        </div>
    )
}